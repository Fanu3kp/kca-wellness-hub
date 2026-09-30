<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'booking_provider_id',
        'peer_counselor_id',
        'campus_id',
        'support_request_id',
        'starts_at',
        'ends_at',
        'mode',
        'attendee_mode',
        'status',
        'booking_reference',
        'notes',
        'cancelled_at',
    ];

    protected function casts(): array
    {
        return [
            'starts_at' => 'datetime',
            'ends_at' => 'datetime',
            'notes' => 'encrypted',
            'cancelled_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function bookingProvider(): BelongsTo
    {
        return $this->belongsTo(BookingProvider::class);
    }

    public function peerCounselor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'peer_counselor_id');
    }

    public function campus(): BelongsTo
    {
        return $this->belongsTo(Campus::class);
    }

    public function supportRequest(): BelongsTo
    {
        return $this->belongsTo(SupportRequest::class);
    }
}
