<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\PayWayService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register()
    {
        $this->app->singleton(PayWayService::class, function ($app) {
            return new PayWayService();
        });

        $this->app->bind(MarkdownServiceProvider::class, function ($app) {
            return new MarkdownServiceProvider($app);
        });
    }
    

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
