<?php

use App\Support\Helpers\AppHelpers;

if (!function_exists('helpers')) {
    function helpers()
    {
        return AppHelpers::getInstance();
    }
}
