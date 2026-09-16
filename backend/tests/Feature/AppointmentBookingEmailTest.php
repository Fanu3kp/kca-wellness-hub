<?php

namespace Tests\Feature;

use App\Mail\AppointmentBooked;
use App\Models\Appointment;
use App\Models\BookingProvider;
use App\Models\Campus;
use App\Models\Profile;
use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class AppointmentBookingEmailTest extends TestCase
{
    use RefreshDatabase;

    private User $student;

    private Campus $campus;

    private BookingProvider $provider;

    protected function setUp(): void
    {
        parent::setUp();

        Role::create(['name' => 'student', 'description' => 'Student user']);
        $this->campus = Campus::create([
            'name' => 'Ruaraka Main',
            'code' => 'RUARAKA',
            'location' => 'Ruaraka',
            'is_active' => true,
        ]);
        $this->student = User::factory()->create(['is_active' => true]);
        $this->student->roles()->attach(Role::where('name', 'student')->firstOrFail());
        Profile::create(['user_id' => $this->student->id, 'campus_id' => $this->campus->id]);
        $this->provider = BookingProvider::create([
            'campus_id' => $this->campus->id,
            'name' => 'Belinda Main',
            'mode' => 'main',
            'external_booking_url' => 'https://example.test/book/belinda-main',
            'is_active' => true,
            'sort_order' => 0,
        ]);
    }

    public function test_booking_sends_confirmation_email_to_student(): void
    {
        Mail::fake();
        $startsAt = now()->addDay()->startOfDay();
        $endsAt = $startsAt->copy()->addHour();

        $response = $this->withToken($this->student->createToken('test')->plainTextToken)
            ->postJson('/api/appointments', [
                'booking_provider_id' => $this->provider->id,
                'campus_id' => $this->campus->id,
                'starts_at' => $startsAt->toISOString(),
                'ends_at' => $endsAt->toISOString(),
                'notes' => 'Private notes must not be emailed.',
            ]);

        $response->assertCreated();
        $appointment = Appointment::findOrFail($response->json('data.id'));

        Mail::assertSent(AppointmentBooked::class, function (AppointmentBooked $mail) use ($appointment): bool {
            return $mail->hasTo($this->student->email)
                && $mail->appointment->is($appointment)
                && str_contains($mail->render(), $appointment->booking_reference)
                && ! str_contains($mail->render(), 'Private notes must not be emailed.');
        });
    }
}
