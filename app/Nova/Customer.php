<?php

namespace App\Nova;

use App\Nova\User;
use Laravel\Nova\Fields\ID;
use Illuminate\Http\Request;
use Laravel\Nova\Http\Requests\NovaRequest;

class Customer extends User
{
    public static function label()
    {
        return 'Customers';
    }

    public static function indexQuery(NovaRequest $request, $query)
    {
        return $query->whereHas('roles', function ($query) {
            $query->where('name', 'customer');
        });
    }
}
