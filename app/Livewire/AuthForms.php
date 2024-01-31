<?php

namespace App\Livewire;

use App\Jobs\SendTransactionEmail;
use App\Models\User;
use Livewire\Component;

class AuthForms extends Component
{
    public $type = 'magic-link';
    public $form = [
        'email' => '',
        'phone' => '',
        'phone_otp' => '',
        'password' => '',
        'first_name' => '',
        'last_name' => '',
    ];

    public function rules()
    {
        $rules = [
            'magic-link' => [
                'form.email' => 'required|email',
            ],
        ];

        return $rules[$this->type];
    }

    public function messages()
    {
        $messages = [
            'magic-link' => [
                'form.email.required' => "Please enter your email address.",
                'form.email.email' => "Please enter a valid email address.",
            ],
        ];

        return $messages[$this->type];
    }

    /* email link functions */
    public function sendEmailLink()
    {
        $this->validate($this->rules(), $this->messages());
        session()->flash('success', 'Please check your email for the magic login link.');
        dispatch((new SendTransactionEmail(
            $this->form['email'],
            'Login to your account',
            'emails.auth.magic-link',
            ['link' => '#']
        )));
        $this->form['email'] = '';
        // send email verification link
    }

    public function render()
    {
        return view('livewire.auth-forms.' . $this->type);
    }
}
