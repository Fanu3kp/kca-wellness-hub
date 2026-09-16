<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class WellnessResource extends Model
{
    use HasFactory;

    protected $fillable = [
        'campus_id',
        'title',
        'slug',
        'summary',
        'body',
        'category',
        'audience',
        'url',
        'is_published',
        'published_at',
        'sort_order',
    ];

    protected function casts(): array
    {
        return ['is_published' => 'boolean', 'published_at' => 'datetime'];
    }

    public function campus(): BelongsTo
    {
        return $this->belongsTo(Campus::class);
    }
}
