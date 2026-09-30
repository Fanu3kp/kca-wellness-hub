<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StaffRegistration extends Model
{
    use HasFactory;

    public const ROLE_PEER_COUNSELOR = 'peer_counselor';

    public const ROLE_GUIDANCE_STAFF = 'guidance_staff';

    public const ROLE_HOD = 'hod';

    protected $fillable = [
        'role',
        'number',
        'email',
        'campus_id',
        'is_active',
        'claimed_at',
        'claimed_by',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'claimed_at' => 'datetime',
        ];
    }

    public function campus(): BelongsTo
    {
        return $this->belongsTo(Campus::class);
    }

    public function claimedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'claimed_by');
    }

    public function isClaimedBy(int $userId): bool
    {
        return $this->claimed_by === $userId;
    }
}
