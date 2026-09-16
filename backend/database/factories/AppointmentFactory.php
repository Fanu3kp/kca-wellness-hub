<?php

namespace Database\Factories;

use App\Models\Appointment;
use App\Models\BookingProvider;
use App\Models\Campus;
use App\Models\SupportRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Appointment> */
class AppointmentFactory extends Factory
{
    public function definition(): array
    {
        $provider = BookingProvider::factory()->create();

        return [
            'user_id' => User::factory(),
            'booking_provider_id' => $provider,
            'campus_id' => $provider->campus_id ?? Campus::factory(),
            'support_request_id' => SupportRequest::factory(),
            'starts_at' => fake()->dateTimeBetween('tomorrow', '+30 days'),
            'ends_at' => now()->addHour(),
            'status' => 'pending',
            'booking_reference' => fake()->unique()->lexify('APPT-??????'),
            'notes' => fake()->optional()->sentence(),
        ];
    }
}
