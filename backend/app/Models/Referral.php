<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Referral extends Model
{
    use HasFactory;

    protected $fillable = [
        'support_request_id',
        'from_user_id',
        'to_user_id',
        'reason',
        'notes',
        'status',
        'referred_at',
        'completed_at',
    ];

    protected function casts(): array
    {
        return ['notes' => 'encrypted', 'referred_at' => 'datetime', 'completed_at' => 'datetime'];
    }

    public function supportRequest(): BelongsTo
    {
        return $this->belongsTo(SupportRequest::class);
    }

    public function fromUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'from_user_id');
    }

    public function toUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'to_user_id');
    }
}
