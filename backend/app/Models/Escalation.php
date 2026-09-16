<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Escalation extends Model
{
    use HasFactory;

    protected $fillable = [
        'support_request_id',
        'conversation_id',
        'escalated_by',
        'assigned_to',
        'reason',
        'severity',
        'status',
        'external_reference',
        'notes',
        'escalated_at',
        'resolved_at',
    ];

    protected function casts(): array
    {
        return ['notes' => 'encrypted', 'escalated_at' => 'datetime', 'resolved_at' => 'datetime'];
    }

    public function supportRequest(): BelongsTo
    {
        return $this->belongsTo(SupportRequest::class);
    }

    public function conversation(): BelongsTo
    {
        return $this->belongsTo(Conversation::class);
    }

    public function escalatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'escalated_by');
    }

    public function assignee(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}
