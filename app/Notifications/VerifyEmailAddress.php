<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\URL;

class VerifyEmailAddress extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $app_name = config('app.name');
        $verification_link = URL::signedRoute('auth.verify', ['user' => $notifiable->id, 'redirect' => route('web.index')], now()->addDays(1));

        return (new MailMessage)
            ->subject("Verify Your Email Now To Confirm Your {$app_name} Membership!")
            ->view('emails.auth.verify-email', [
                'app_name' => env('APP_NAME', 'Laravel'),
                'user' => $notifiable,
                'verification_link' => $verification_link,
            ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
