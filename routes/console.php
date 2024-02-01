<?php

use App\Services\FirebaseService;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('test', function () {
    // (new FirebaseService)->dbWrite('test', ['test' => date('Y-m-d H:i:s')]);
    // helpers()->sendEmail('admin@cssjockey.com', 'This is a test email', 'emails.test', ['test' => date('Y-m-d H:i:s')]);
    echo helpers()->magicLoginLink('admin@cssjockey.com');
})->purpose('Display an inspiring quote');
