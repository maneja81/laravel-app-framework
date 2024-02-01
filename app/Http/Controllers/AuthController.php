<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login()
    {
        return view('auth.login');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        session()->invalidate();
        return redirect($request->redirect ?? route('web.index'));
    }

    public function verify(Request $request)
    {
        $user = (new User())->findOrFail($request->user);
        $user->markEmailAsVerified();
        Auth::login($user);
        return redirect($request->redirect ?? route('web.index'));
    }
}
