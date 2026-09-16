<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactMessageController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'subject' => ['required', 'string', 'max:255'],
            'message' => ['nullable', 'string', 'max:5000'],
            'campus_id' => ['nullable', 'exists:campuses,id'],
        ]);

        $payload['status'] = 'unread';
        $contactMessage = ContactMessage::create($payload);
        $this->audit('contact_message.created', ContactMessage::class, $contactMessage->id);

        return response()->json([
            'message' => 'Thank you. Your message has been received by the KCA Wellness Hub team.',
        ], 201);
    }
}
