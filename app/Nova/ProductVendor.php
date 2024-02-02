<?php

namespace App\Nova;

use Illuminate\Support\Str;
use Laravel\Nova\Fields\Email;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\MorphMany;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\URL;
use Laravel\Nova\Http\Requests\NovaRequest;

class ProductVendor extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\ProductVendor>
     */
    public static $model = \App\Models\ProductVendor::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'name',
        'email',
        'phone',
        'website',
        'address',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        return [
            ID::make()->sortable()->fullWidth(),
            Text::make('Name')->placeholder('Specify vendor name')->rules('required', 'unique:product_vendors,address,{{resourceId}}')->sortable()->fullWidth(),
            Email::make('Email')->placeholder('Specify vendor email address')->rules('email', 'required', 'unique:product_vendors,email,{{resourceId}}')->fullWidth(),
            Number::make('Phone')->rules('required', 'numeric', 'unique:product_vendors,phone,{{resourceId}}', function ($attribute, $value, $fail) {
                if (Str::length($value) < 10) {
                    return $fail('The '.$attribute.' field must be 10 digits long.');
                }
            })->fullWidth(),
            URL::make('Website')->placeholder('Specify vendor website')->rules('url', 'unique:product_vendors,website,{{resourceId}}')->fullWidth(),
            MorphMany::make('Addresses')->fullWidth(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @return array
     */
    public function cards(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @return array
     */
    public function filters(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @return array
     */
    public function lenses(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @return array
     */
    public function actions(NovaRequest $request)
    {
        return [];
    }
}
