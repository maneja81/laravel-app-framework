<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\Currency;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\KeyValue;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class ProductVariant extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\ProductVariant>
     */
    public static $model = \App\Models\ProductVariant::class;

    public static $with = ['product'];

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
        'sku',
        'cost',
        'barcode',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        $sku = 'BFSKU-'.strtoupper(substr(uniqid(), 0, 8));
        helpers()->log($this);

        return [
            ID::make()->sortable(),
            Text::make('SKU')->rules('required', 'unique:product_variants,sku,{{resourceId}}')->default($sku)->readonly()->sortable()->fullWidth(),
            BelongsTo::make('Product', 'product', Product::class)->rules('required')->showCreateRelationButton()->searchable()->sortable()->fullWidth(),
            Text::make('Name')->rules('required', 'unique:product_variants,sku,{{resourceId}}')->help('e.g. BLACK-XL')->sortable()->fullWidth(),
            Image::make('Image')->disk('public')->rules('required')->path('products')->fullWidth(),
            Number::make('Stock')->rules('required', 'min:0')->sortable()->fullWidth(),
            Currency::make('Cost')->rules('required', 'min:0')->currency('INR')->sortable()->fullWidth(),
            Currency::make('Price')->rules('required', 'min:0')->currency('INR')->sortable()->fullWidth(),
            Currency::make('Compare Price')->rules('required', 'min:0')->currency('INR')->sortable()->fullWidth(),
            Number::make('Weight')->rules('required', 'min:0')->placeholder('KGs')->help('Specify the weight in kilogram, this is used to calculate shipping cost.')->step(0.01)->sortable()->fullWidth(),
            BelongsTo::make('HSN Code', 'hsn_code', ProductHsnCode::class)->rules('required', 'exists:product_hsn_codes,code')->showCreateRelationButton()->searchable()->sortable()->fullWidth(),
            Select::make('Status')->options([
                'draft' => 'Draft',
                'published' => 'Published',
                'discontinued' => 'Discontinued',
            ])->searchable()->displayUsing(function ($status) {
                return ucfirst($status);
            })->default('draft')->fullWidth(),
            Boolean::make('Is Default', 'is_default')->sortable()->fullWidth(),
            KeyValue::make('Meta')->rules('json')->fullWidth(),
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
