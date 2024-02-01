<?php

namespace App\Support\Helpers\Traits;

use App\Mail\TransactionalEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

trait EmailHelpers
{
    public function sendEmail($to, $subject, $view, $data, $attachments = [])
    {
        $email = new TransactionalEmail($subject, $view, $data, $attachments);
        Mail::to($to)->send($email);
    }

    public function magicLoginLink(string $email)
    {
        return URL::signedRoute('auth.login.with-magic-link', ['email' => $email], now()->addMinutes(5));
    }
}
