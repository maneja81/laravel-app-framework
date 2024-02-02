<?php

namespace App\Nova;

use App\Nova\ProductBrand;
use Laravel\Nova\Fields\ID;
use App\Nova\ProductVariant;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Tag;
use Laravel\Nova\Fields\Text;
use App\Nova\ProductCollection;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\Markdown;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Http\Requests\NovaRequest;

class Product extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Product>
     */
    public static $model = \App\Models\Product::class;

    public static $with = ['variants'];

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
        'content',
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
            ID::make()->sortable()->fullWidth(),
            Text::make('Name')->placeholder('Specify product title')->sortable()->default('Test Product')->fullWidth(),
            Markdown::make('Short Description', 'excerpt')->hideFromIndex()->default('Short description')->fullWidth(),
            Markdown::make('Long Description', 'content')->hideFromIndex()->default('Long description')->fullWidth(),
            Select::make('Status')->options([
                'draft' => 'Draft',
                'published' => 'Published',
                'discontinued' => 'Discontinued',
            ])->displayUsing(function ($status) {
                return ucfirst($status);
            })->default('draft')->fullWidth(),
            HasMany::make('Product Variants', 'variants', ProductVariant::class)->fullWidth(),
            BelongsTo::make('Brand', 'brand', ProductBrand::class)->nullable()->fullWidth(),
            BelongsToMany::make('Collections', 'collections', ProductCollection::class)->showCreateRelationButton()->collapsedByDefault()->fullWidth(),
            BelongsToMany::make('Categories', 'categories', ProductCategory::class)->showCreateRelationButton()->collapsedByDefault()->fullWidth(),
            BelongsToMany::make('Tags', 'tags', ProductTag::class)->showCreateRelationButton()->collapsedByDefault()->fullWidth(),
            BelongsToMany::make('Vendors', 'vendors', ProductVendor::class)->showCreateRelationButton()->collapsedByDefault()->fullWidth(),
            Tag::make('Categories', 'categories', ProductCategory::class)->showCreateRelationButton()->fullWidth(),
            Tag::make('Tags', 'tags', ProductTag::class)->showCreateRelationButton()->fullWidth(),
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
