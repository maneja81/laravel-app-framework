<?php

namespace App\Nova;

use App\Nova\User;
use App\Nova\Motorcycle;
use Illuminate\Support\Str;
use Laravel\Nova\Fields\ID;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Tag;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\MorphMany;
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

    public function fields(NovaRequest $request)
    {
        return [
            ID::make()->sortable(),
            Text::make('Name', 'display_name')->onlyOnIndex(),

            Text::make('First Name')
                ->sortable()
                ->rules('required', 'max:255')->hideFromIndex(),

            Text::make('Last Name')
                ->rules('required', 'max:255')->hideFromIndex(),

            Text::make('Email')
                ->sortable()
                ->rules('required', 'email', 'max:254')
                ->creationRules('unique:users,email')
                ->updateRules('unique:users,email,{{resourceId}}'),

            Number::make('Phone')
                ->sortable()
                ->rules('required', function ($attribute, $value, $fail) {
                    if (Str::length($value) < 10) {
                        return $fail('The ' . $attribute . ' field must be 10 digits long.');
                    }
                })
                ->creationRules('unique:users,phone')
                ->updateRules('unique:users,phone,{{resourceId}}'),

            Tag::make('Garage', 'motorcycles', Motorcycle::class)->fullWidth(),

            MorphMany::make('Addresses')->collapsedByDefault()->fullWidth(),
            MorphMany::make('Garage', 'motorcycles', Motorcycle::class)->collapsedByDefault()->fullWidth(),
        ];
    }
}
