@extends('layouts.email')
@section('content')
    <h3>Hey {{ $user->first_name }},</h3>
    <p>Get ready to embark on a seamless journey with us - your magic login link is here to whisk you away to an exclusive world of motorcycle delights!</p>
    <p>
        No need for passwords, just click the link above, and voilà! You're in. Your account will be unlocked, granting you immediate access to our premium collection of motorcycle parts, accessories, and pre-owned treasures.
    </p>
    <p>
        <x-email-button href="{{ $verification_link }}" target="_blank">Sign In</x-email-button>
    </p>
    <p>Why wait? Dive into the excitement now and be the first to explore our latest offerings.</p>
    <h4>Magic Login Link Details:</h4>
    <ul>
        <li><b>Validity:</b> This link is enchanted and active for a limited time, so make the most of it!</li>
        <li><b>Secure Access:</b> Your account is safeguarded, ensuring a worry-free experience.</li>
    </ul>
    <p>Feel the wind in your hair as you shop and discover what's trending in the world of motorcycles. And don't forget about the exclusive offers waiting just for you.</p>
    <p>If you have any questions or encounter any mystical obstacles, our trusty support team is here to assist at {{ config('setup.emails.support') }}.</p>
    <p>Thank you for choosing the magic route with us. Your adventure begins now!</p>
    <p>
        Best regards,
        <br><br>
        The {{ config('app.name') }} Team
    </p>
@endsection
