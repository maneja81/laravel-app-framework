@extends('layouts.email')
@section('content')
    <h3>Hey {{ $user->first_name }},</h3>
    <p>
        Welcome to the {{ $app_name }} family!
        We're thrilled to have you join our community of passionate riders.
        Before we rev up the excitement, we need to make sure everything is set for your epic journey.
    </p>
    <h4>Your Exclusive Welcome Gift Awaits:</h4>
    <p>As a token of our appreciation, here's a special discount coupon just for you. Use code <b>{{ config('setup.settings.welcome_coupon_code') }}</b> to enjoy a {{ config('setup.settings.welcome_coupon_code_discount') }} discount on your first purchase. Your adventure is about to get even more exciting!</p>
    <h4>Why {{ config('app.name') }}?</h4>
    <ul>
        <li>Premium Selection: Discover top-notch motorcycle parts, accessories, and pre-owned gems.</li>
        <li>Exclusive Offers: Be the first to access member-only discounts and special promotions.</li>
        <li>Community Vibes: Connect with fellow riders who share your passion for two-wheel adventures.</li>
    </ul>
    <p>Remember, the road ahead is full of possibilities, and we're here to make your journey extraordinary.</p>
    <p>If you have any questions or need assistance, our support team is ready to help at {{ config('setup.emails.support') }}.</p>
    <p>Thank you for choosing {{ config('app.name') }} - where every ride is an adventure!</p>
    <p>
        Best regards,
        <br><br>
        The {{ config('app.name') }} Team
    </p>
@endsection
