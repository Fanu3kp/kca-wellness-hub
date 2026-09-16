<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Counselling appointment request</title>
</head>
<body style="margin: 0; background: #f5f2e8; color: #333333; font-family: Arial, sans-serif;">
    <div style="max-width: 640px; margin: 0 auto; padding: 32px 20px;">
        <div style="background: #0a1f44; padding: 24px; border-radius: 16px 16px 0 0; color: #ffffff;">
            <strong style="font-size: 20px;">KCA Wellness Hub</strong>
            <p style="margin: 8px 0 0; color: #e8edf5;">Counselling appointment confirmation</p>
        </div>
        <div style="background: #ffffff; padding: 28px; border-radius: 0 0 16px 16px;">
            <p style="margin-top: 0;">Hello {{ $appointment->user->name }},</p>
            <p>Your counselling appointment request has been received and is waiting for confirmation.</p>

            <div style="background: #f8f6f0; border: 1px solid #e0ddd0; border-radius: 12px; padding: 16px; margin: 24px 0;">
                <p style="margin: 0 0 10px;"><strong>Counsellor:</strong> {{ $appointment->bookingProvider->name ?? 'KCA Counselling Team' }}</p>
                <p style="margin: 0 0 10px;"><strong>Campus:</strong> {{ $appointment->campus->name ?? 'Virtual / selected campus' }}</p>
                <p style="margin: 0 0 10px;"><strong>Requested time:</strong> {{ $appointment->starts_at->copy()->setTimezone('Africa/Nairobi')->format('l, j F Y, h:i A') }} EAT</p>
                <p style="margin: 0;"><strong>Reference:</strong> {{ $appointment->booking_reference }}</p>
            </div>

            <p>No private counselling notes are included in this email. You can check the request status in your Wellness Hub notifications.</p>
            <p style="margin-bottom: 0;">KCA University Peer Counselling &amp; Wellness Hub</p>
        </div>
    </div>
</body>
</html>
