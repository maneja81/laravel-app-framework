<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\Badge;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\KeyValue;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Slug;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class ProductCollection extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\ProductCollection>
     */
    public static $model = \App\Models\ProductCollection::class;

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
        'id',
        'name',
        'slug',
        'status',
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
            Text::make('Name')->placeholder('Specify collection name')->rules('required', 'unique:product_collections,name,{{resourceId}}')->sortable()->fullWidth(),
            Slug::make('Slug')->from('Name')->separator('-')->rules('required')->fullWidth(),
            Image::make('Image')->disableDownload()->fullWidth(),
            Select::make('Status')->options([
                'draft' => 'Draft',
                'publish' => 'Publish',
            ])->default('draft')->displayUsingLabels()->fullWidth(),
            Badge::make('Status')->map([
                'draft' => 'danger',
                'publish' => 'success',
            ])->fullWidth(),
            KeyValue::make('Attributes', 'meta')->rules('json')->fullWidth(),
            BelongsToMany::make('Products')->fullWidth(),
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
