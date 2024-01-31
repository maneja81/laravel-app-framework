<?php

namespace App\Support\Helpers\Traits;

use App\Mail\TransactionalEmail;
use Illuminate\Support\Facades\Mail;

trait EmailHelpers
{
    public function sendEmail($to, $subject, $view, $data, $attachments = [])
    {
        $email = new TransactionalEmail($subject, $view, $data, $attachments);
        Mail::to($to)->send($email);
    }
}
