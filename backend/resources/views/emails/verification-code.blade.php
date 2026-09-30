<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Email verification code</title>
</head>
<body style="margin: 0; background: #f5f2e8; color: #333333; font-family: Arial, sans-serif;">
    <div style="max-width: 640px; margin: 0 auto; padding: 32px 20px;">
        <div style="background: #0a1f44; padding: 24px; border-radius: 16px 16px 0 0; color: #ffffff;">
            <strong style="font-size: 20px;">KCA Wellness Hub</strong>
            <p style="margin: 8px 0 0; color: #e8edf5;">Email verification</p>
        </div>
        <div style="background: #ffffff; padding: 28px; border-radius: 0 0 16px 16px;">
            <p style="margin-top: 0;">Hello {{ $name }},</p>
            <p>Thank you for registering with the KCA University Peer Counselling &amp; Wellness Hub.</p>
            <p>To finish setting up your account, please use the following verification code:</p>

            <div style="background: #f8f6f0; border: 1px solid #e0ddd0; border-radius: 12px; padding: 24px; text-align: center; margin: 24px 0;">
                <span style="display: inline-block; font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #1B2C57;">{{ $code }}</span>
            </div>

            <p style="color: #6b7b8d; font-size: 14px;">This code will expire in 15 minutes. If you did not create an account, you can safely ignore this email.</p>
            <p style="margin-bottom: 0;">KCA University Peer Counselling &amp; Wellness Hub</p>
        </div>
    </div>
</body>
</html>
