<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [WebController::class, 'index'])->name('web.index');

Route::get('/auth/login', [AuthController::class, 'login'])->name('auth.login')->middleware('guest');
Route::get('/auth/logout', [AuthController::class, 'logout'])->name('auth.logout')->middleware('auth');
Route::get('/auth/verify', [AuthController::class, 'verify'])->name('auth.verify')->middleware('signed');

Route::get('/auth/{provider}/redirect', [SocialAuthController::class, 'redirect'])->name('social.auth.redirect');
Route::get('/auth/{provider}/callback', [SocialAuthController::class, 'callback'])->name('social.auth.callback');
