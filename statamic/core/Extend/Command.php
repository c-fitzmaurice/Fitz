<?php

namespace Statamic\Extend;

use Illuminate\Console\Command as LaravelCommand;

class Command extends LaravelCommand
{
    use Extensible;

    public function __construct()
    {
        parent::__construct();

        $this->init();
    }
}
