<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Campus extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'code', 'location', 'physical_support', 'virtual_support', 'is_active'];

    protected function casts(): array
    {
        return [
            'physical_support' => 'boolean',
            'virtual_support' => 'boolean',
            'is_active' => 'boolean',
        ];
    }

    public function profiles(): HasMany
    {
        return $this->hasMany(Profile::class);
    }

    public function supportRequests(): HasMany
    {
        return $this->hasMany(SupportRequest::class);
    }

    public function bookingProviders(): HasMany
    {
        return $this->hasMany(BookingProvider::class);
    }

    public function wellnessResources(): HasMany
    {
        return $this->hasMany(WellnessResource::class);
    }

    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }
}
