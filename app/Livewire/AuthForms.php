<?php

namespace App\Livewire;

use App\Jobs\SendTransactionEmail;
use App\Models\User;
use Livewire\Component;

class AuthForms extends Component
{
    /*
        1. show email field
        2. if user exists send verification email to login
        3. if user does not exist, show first name, last name, phone number, password fields and send verification email to register
    */
    public $form_type;
    public $form = [
        'email' => '',
        'password' => '',
        'password_confirmation' => '',
        'phone' => '',
        'phone_otp' => '',
        'first_name' => '',
        'last_name' => '',
    ];

    public function mount($form_type = 'default')
    {
        if (request('view') == 'reset-password') {
            session()->put('auth_form_type', 'reset-password');
            $this->form_type = 'reset-password';
            $user = (new User())->getByField('id', request('user'));
            $this->form['email'] = $user->email;
        }

        if (request('view') == 'magic-link') {
            session()->put('auth_form_type', 'magic-link');
            $this->form_type = 'magic-link';
        }

        $session_form = session('auth_form', false);
        foreach ($this->form as $key => $value) {
            if ($session_form && isset($session_form[$key])) {
                $this->form[$key] = $session_form[$key];
            }
        }
        if (session('auth_form_type', false)) {
            $form_type = session('auth_form_type');
        }
        $this->form_type = $form_type;
    }

    public function updated($name, $value)
    {
        helpers()->log($name . ' - ' . $value);
        $this->validateOnly($name, $this->rules(), $this->messages());
    }

    public function rules()
    {
        $rules = [
            'default' => [
                'form.email' => 'required|email|exists:users,email',
                'form.password' => 'required',
            ],
            'register' => [
                'form.email' => 'required|email|unique:users,email',
                'form.first_name' => 'required|alpha',
                'form.last_name' => 'required|alpha',
                'form.password' => 'required|min:10|regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/',
            ],
            'login' => [
                'form.email' => 'required|email|exists:users,email',
                'form.password' => 'required',
            ],
            'forgot-password' => [
                'form.email' => 'required|email|exists:users,email',
            ],
            'reset-password' => [
                'form.email' => 'required|email|exists:users,email',
                'form.password' => 'required|min:10|confirmed|regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/',
            ],
            'magic-link' => [
                'form.email' => 'required|email|exists:users,email',
            ],
        ];

        return $rules[$this->form_type];
    }

    public function messages()
    {
        $messages = [
            'default' => [
                'form.email.required' => "Please enter your email address.",
                'form.email.email' => "Please enter your email address.",
                'form.email.exists' => "No account found with this email address.",
            ],
            'register' => [
                'form.first_name.required' => "Please enter your first name.",
                'form.first_name.alpha' => "The first name can only contain alphabets.",
                'form.last_name.required' => "Please enter your last name.",
                'form.last_name.alpha' => "The last name can only contain alphabets.",
                'form.email.required' => "Please enter your email address.",
                'form.email.email' => "Please enter a valid email address.",
                'form.email.unique' => "An account with this email already exists.",
                'form.password.required' => "Please enter a strong password.",
                'form.password.min' => "The password must be at least 10 characters.",
                'form.password.regex' => "The password must contain a lowercase, an uppercase and a special character.",
            ],
            'forgot-password' => [
                'form.email.required' => "Please enter your email address.",
                'form.email.email' => "Please enter your email address.",
                'form.email.exists' => "No account found with this email address.",
            ],
            'reset-password' => [
                'form.email.required' => "Please enter your email address.",
                'form.email.email' => "Please enter your email address.",
                'form.email.exists' => "No account found with this email address.",
                'form.password.required' => "Please enter a strong password.",
                'form.password.min' => "The password must be at least 10 characters.",
                'form.password.regex' => "The password must contain a lowercase, an uppercase and a special character.",
                'form.password.confirmed' => "The passwords does not match.",
            ],
            'magic-link' => [
                'form.email.required' => "Please enter your email address.",
                'form.email.email' => "Please enter your email address.",
                'form.email.exists' => "No account found with this email address.",
            ],
        ];

        return $messages[$this->form_type];
    }

    public function toggleFormType(string $form_type)
    {
        session()->put('auth_form_type', $form_type);
        $this->form_type = $form_type;
        helpers()->log($this->form_type);
    }

    public function clearForm(string $form_type)
    {
        $this->form = [
            'email' => '',
            'phone' => '',
            'phone_otp' => '',
            'password' => '',
            'first_name' => '',
            'last_name' => '',
        ];
        session()->forget('auth_form');
        session()->forget('auth_form_type');
        $this->form_type = $form_type;
    }

    public function login()
    {
        $this->validate($this->rules(), $this->messages());
        $user = (new User())->getByField('email', $this->form['email']);
        auth()->attempt([
            'email' => $this->form['email'],
            'password' => $this->form['password'],
        ]);
        if (auth()->check() && !$user->email_verified_at) {
            $user->sendEmailVerificationEmail();
            auth()->logout();
            session()->flash('error', 'You must verify your email address, please check your email for the verification link.');
            return;
        } else if (!auth()->check()) {
            session()->flash('error', 'Please confirm your email and password.');
            return;
        } else {
            auth()->login($user);
            return redirect()->route('web.index');
        }
    }

    public function register()
    {
        $this->validate($this->rules(), $this->messages());
        (new User())->create($this->form)->syncRoles(['user'])->sendWelcomeEmail();
        auth()->logout();
        session()->flash('success', 'Please check your email, We have sent you an email with the Verification Link and Exclusive Welcome Gift!.');
        $this->clearForm('register');
    }

    public function sendPasswordResetEmail()
    {
        $this->validate($this->rules(), $this->messages());
        $user = (new User())->getByField('email', $this->form['email']);
        if ($user) {
            $user->sendPasswordResetEmail();
            session()->flash('success', 'Please check your email for the password reset link.');
        }
    }

    public function setNewPassword()
    {
        $this->validate($this->rules(), $this->messages());
        $user = (new User())->getByField('email', $this->form['email']);
        $user->password = bcrypt($this->form['password']);
        $user->save();
        auth()->login($user);
        return redirect()->route('web.index');
    }

    /* email link functions */
    public function sendMagicLink()
    {
        $this->validate($this->rules(), $this->messages());
        $user = (new User())->getByField('email', $this->form['email']);
        session()->flash('success', 'Please check your email for the magic sign in link.');
        $user->sendMagicLoginLink();
        $this->form['email'] = '';
        // send email verification link
    }

    public function render()
    {
        return view('livewire.auth-forms.' . $this->form_type);
    }
}
