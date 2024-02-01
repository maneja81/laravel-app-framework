@extends('layouts.email')
@section('content')
    <h3>Hey {{ $user->first_name }},</h3>
    <p>
        We're excited to have you as part of our two-wheel family.
        Before you hit the road with us, there's just one quick pit stop we need you to make.
    </p>
    <h4>Verify Your Email:</h4>
    <p>To ensure your account is secure and you don't miss out on any of the latest updates, exclusive offers, and exciting announcements, please click on the link below to verify your email address:</p>
    <p>
        <x-email-button href="{{ $verification_link }}" target="_blank">Verify Your Email</x-email-button>
    </p>
    <p>By verifying your email, you're not just confirming your membership; you're unlocking the gateway to a world of premium motorcycle parts, accessories, and unbeatable savings.</p>
    <p>Your verification link is valid for a limited time, so don't let this opportunity ride away.</p>
    <p>If you encounter any bumps on the road or have questions, our support team is here to assist at {{ config('setup.emails.support') }}.</p>
    <p>Thank you for choosing {{ $app_name }}. Get ready to turn your rides into unforgettable adventures!</p>
    <p>
        Best regards,
        <br><br>
        The {{ config('app.name') }} Team
    </p>
@endsection
