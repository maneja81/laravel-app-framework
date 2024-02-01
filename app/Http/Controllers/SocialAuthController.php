<?php

namespace App\Http\Controllers;

use App\Models\User;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    public function redirect(string $provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback(string $provider)
    {
        $provider_user = Socialite::driver($provider)->user();
        // check if user already exists with email
        $user = User::where('email', $provider_user->getEmail())->first();
        if ($user) {
            $user->updateInfo([
                'provider' => $provider,
                'provider_id' => $provider_user->getId(),
                'avatar' => $provider_user->getAvatar(),
                'token' => $provider_user->token,
                'token_secret' => $provider_user->tokenSecret,
            ]);
            auth()->login($user);

            return redirect()->route('web.index');
        }
        // create user
        $user = (new User())->create([
            'first_name' => $provider_user->user['given_name'],
            'last_name' => $provider_user->user['family_name'],
            'email' => $provider_user->getEmail(),
            'password' => bcrypt($provider_user->getId()),
        ]);
        $user->updateInfo([
            'provider' => $provider,
            'provider_id' => $provider_user->getId(),
            'avatar' => $provider_user->getAvatar(),
            'token' => $provider_user->token,
            'token_secret' => $provider_user->tokenSecret,
            'temporary-password' => true,
        ]);
        $user->markEmailAsVerified();
        $user->syncRoles(['user'])->sendWelcomeEmailSocial();
        auth()->login($user);

        return redirect()->route('web.index');
    }
}
