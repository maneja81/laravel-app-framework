<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Notifications\ForgotPassword;
use App\Notifications\MagicLoginLink;
use App\Notifications\VerifyEmailAddress;
use App\Notifications\WelcomeEmail;
use App\Notifications\WelcomeEmailSocial;
use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasRoles;
    use ModelHelpers;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'phone_verified_at',
        'password',
        'meta',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'meta' => 'array',
    ];

    public function create($data)
    {
        $data['password'] = bcrypt($data['password']);
        $user = parent::create($data);

        return $user;
    }

    public function syncRoles(array $role_names)
    {
        $roles = Role::whereIn('name', $role_names)->get()->pluck('id')->toArray();
        $this->roles()->sync($roles);

        return $this;
    }

    public function sendEmailVerificationEmail()
    {
        $this->notify(new VerifyEmailAddress($this));

        return $this;
    }

    public function sendPasswordResetEmail()
    {
        $this->notify(new ForgotPassword($this));

        return $this;
    }

    public function sendWelcomeEmail()
    {
        $this->notify(new WelcomeEmail($this));

        return $this;
    }

    public function sendWelcomeEmailSocial()
    {
        $this->notify(new WelcomeEmailSocial($this));

        return $this;
    }

    public function sendMagicLoginLink()
    {
        $this->notify(new MagicLoginLink($this));

        return $this;
    }

    public function getDisplayNameAttribute()
    {
        return $this->first_name.' '.$this->last_name;
    }
}
