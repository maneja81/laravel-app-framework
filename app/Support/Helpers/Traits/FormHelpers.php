<?php

namespace App\Support\Helpers\Traits;

use Illuminate\Validation\Rules\Password;

trait FormHelpers
{
    public function strongPasswordRule()
    {
        return Password::min(8)
            ->letters()
            ->mixedCase()
            ->numbers()
            ->symbols()
            ->uncompromised();
    }
}
