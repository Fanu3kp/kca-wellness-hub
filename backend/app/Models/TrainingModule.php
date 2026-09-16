<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingModule extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'content_url',
        'duration_minutes',
        'level',
        'is_published',
        'sort_order',
    ];

    protected function casts(): array
    {
        return ['duration_minutes' => 'integer', 'is_published' => 'boolean'];
    }
}
