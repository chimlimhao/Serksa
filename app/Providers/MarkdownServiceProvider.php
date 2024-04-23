<?php

namespace App\Providers;

use Parsedown;
use Illuminate\Support\ServiceProvider;

class MarkdownServiceProvider extends ServiceProvider
{
    protected $parsedown;

    public function __construct($app)
    {
        parent::__construct($app);
        $this->parsedown = new Parsedown();
    }

    public function parse($content)
    {
        return $this->parsedown->text($content);
    }
}
