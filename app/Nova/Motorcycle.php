<?php

namespace App\Nova;

use Laravel\Nova\Fields\ID;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\KeyValue;
use Laravel\Nova\Http\Requests\NovaRequest;

class Motorcycle extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Motorcycle>
     */
    public static $model = \App\Models\Motorcycle::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'display_name';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
        'make',
        'year',
        'model',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        return [
            // ID::make()->sortable(),
            Text::make('Name')->displayUsing(function(){
                return $this->display_name;
            })->sortable()->onlyOnIndex(),

            Text::make('Make')->sortable()->hideFromIndex(),
            Text::make('Model')->sortable()->hideFromIndex(),
            Text::make('Year')->sortable()->hideFromIndex(),
            KeyValue::make('Attributes', 'meta')->nullable(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function cards(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function filters(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function lenses(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function actions(NovaRequest $request)
    {
        return [];
    }
}
