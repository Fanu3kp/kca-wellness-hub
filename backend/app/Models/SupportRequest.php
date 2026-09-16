<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SupportRequest extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'requester_id',
        'campus_id',
        'assigned_to',
        'category',
        'subject',
        'details',
        'status',
        'priority',
        'source',
        'is_anonymous',
        'resolved_at',
    ];

    protected function casts(): array
    {
        return [
            'details' => 'encrypted',
            'is_anonymous' => 'boolean',
            'resolved_at' => 'datetime',
        ];
    }

    public function requester(): BelongsTo
    {
        return $this->belongsTo(User::class, 'requester_id');
    }

    public function campus(): BelongsTo
    {
        return $this->belongsTo(Campus::class);
    }

    public function assignee(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function conversation(): HasMany
    {
        return $this->hasMany(Conversation::class);
    }

    public function referrals(): HasMany
    {
        return $this->hasMany(Referral::class);
    }

    public function escalations(): HasMany
    {
        return $this->hasMany(Escalation::class);
    }
}
