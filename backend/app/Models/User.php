<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Connect;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'is_active',
        'last_login_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'last_login_at' => 'datetime',
            'is_active' => 'boolean',
            'password' => 'hashed',
        ];
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }

    public function profile(): HasOne
    {
        return $this->hasOne(Profile::class);
    }

    public function supportRequests(): HasMany
    {
        return $this->hasMany(SupportRequest::class, 'requester_id');
    }

    public function assignedSupportRequests(): HasMany
    {
        return $this->hasMany(SupportRequest::class, 'assigned_to');
    }

    public function conversations(): HasMany
    {
        return $this->hasMany(Conversation::class, 'created_by');
    }

    public function participantConversations(): BelongsToMany
    {
        return $this->belongsToMany(Conversation::class, 'conversation_participants')
            ->withPivot(['role', 'joined_at', 'left_at'])
            ->withTimestamps();
    }

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }

    public function notifications(): HasMany
    {
        return $this->hasMany(Notification::class);
    }

    public function referralsFrom(): HasMany
    {
        return $this->hasMany(Referral::class, 'from_user_id');
    }

    public function referralsTo(): HasMany
    {
        return $this->hasMany(Referral::class, 'to_user_id');
    }

    public function escalationsFrom(): HasMany
    {
        return $this->hasMany(Escalation::class, 'escalated_by');
    }

    public function auditLogs(): HasMany
    {
        return $this->hasMany(AuditLog::class);
    }

    public function connects(): HasMany
    {
        return $this->hasMany(Connect::class, 'follower_id');
    }

    public function receivedConnects(): HasMany
    {
        return $this->hasMany(Connect::class, 'followed_id');
    }

    public function followers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'connects', 'followed_id', 'follower_id')
            ->wherePivot('status', 'accepted')
            ->withTimestamps();
    }

    public function following(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'connects', 'follower_id', 'followed_id')
            ->wherePivot('status', 'accepted')
            ->withTimestamps();
    }

    public function connectRequests(): HasMany
    {
        return $this->hasMany(Connect::class, 'followed_id')->where('status', 'pending');
    }

    public function hasConnectWith(User $user): ?Connect
    {
        return Connect::where('follower_id', $this->id)
            ->where('followed_id', $user->id)
            ->first();
    }

    public function hasRole(string $role): bool
    {
        return $this->roles()->where('name', $role)->exists();
    }

    public function hasAnyRole(array $roles): bool
    {
        return $this->roles()->whereIn('name', $roles)->exists();
    }
}
