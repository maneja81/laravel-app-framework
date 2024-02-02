<?php

namespace App\Providers;

use App\Nova\User;
use App\Nova\Product;
use Laravel\Nova\Nova;
use Illuminate\Http\Request;
use App\Nova\Dashboards\Main;
use App\Nova\ProductCategory;
use App\Nova\ProductCollection;
use App\Nova\ProductTag;
use App\Nova\ProductVariant;
use App\Nova\ProductVendor;
use Laravel\Nova\Menu\MenuItem;
use Laravel\Nova\Menu\MenuGroup;
use Laravel\Nova\Menu\MenuSection;
use Illuminate\Support\Facades\Gate;
use Laravel\Nova\NovaApplicationServiceProvider;

class NovaServiceProvider extends NovaApplicationServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
        Nova::withBreadcrumbs();
        Nova::footer(function ($request) {
            return '';
        });

        Nova::mainMenu(function (Request $request) {
            return [
                MenuSection::dashboard(Main::class)->icon('chart-bar'),

                MenuSection::make('Store', [
                    MenuItem::resource(Product::class),
                    MenuItem::resource(ProductVariant::class),
                    MenuItem::resource(ProductCategory::class),
                    MenuItem::resource(ProductTag::class),
                    MenuItem::resource(ProductVendor::class),
                    MenuItem::resource(ProductCollection::class),
                ])->icon('shopping-cart')->collapsable(),

                MenuSection::resource(User::class),

            ];
        });

        Nova::footer(function ($request) {
            return '';
        });
    }

    /**
     * Register the Nova routes.
     *
     * @return void
     */
    protected function routes()
    {
        Nova::routes()
            ->withAuthenticationRoutes()
            ->withPasswordResetRoutes()
            ->register();
    }

    /**
     * Register the Nova gate.
     *
     * This gate determines who can access Nova in non-local environments.
     *
     * @return void
     */
    protected function gate()
    {
        Gate::define('viewNova', function ($user) {
            return in_array($user->email, [
                //
            ]);
        });
    }

    /**
     * Get the dashboards that should be listed in the Nova sidebar.
     *
     * @return array
     */
    protected function dashboards()
    {
        return [
            new \App\Nova\Dashboards\Main,
        ];
    }

    /**
     * Get the tools that should be listed in the Nova sidebar.
     *
     * @return array
     */
    public function tools()
    {
        return [];
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
