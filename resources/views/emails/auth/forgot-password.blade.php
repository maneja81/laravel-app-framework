@extends('layouts.email')
@section('content')
    <h3>Hey {{ $user->first_name }},</h3>
    <p>
        We hope this message finds you well and ready for your next thrilling ride with {{ $app_name }}!
    </p>
    <p>Did you forget your password? No worries! It happens to the best of us.</p>
    <h4>Reset Your Password:</h4>
    <p>To get back on the road with us, simply click the button below to reset your password:</p>
    <p>
        <x-email-button href="{{ $verification_link }}" target="_blank">Reset Password</x-email-button>
    </p>
    <p>This button is your ticket to a hassle-free login experience, ensuring you have smooth rides ahead.</p>
    <p>Your security is our top priority, so if you didn't request this password reset, please reach out to our support team immediately at {{ config('setup.emails.support') }}.</p>
    <p>Ready to hit the road again? Click the button and let the adventures continue!</p>
    <p>
        Best regards,
        <br><br>
        The {{ config('app.name') }} Team
    </p>
@endsection
