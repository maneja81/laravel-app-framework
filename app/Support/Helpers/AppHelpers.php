<?php

namespace App\Support\Helpers;

use App\Support\Helpers\Traits\ArrayHelpers;
use App\Support\Helpers\Traits\DateHelpers;
use App\Support\Helpers\Traits\EmailHelpers;
use App\Support\Helpers\Traits\FileHelpers;
use App\Support\Helpers\Traits\FormHelpers;
use App\Support\Helpers\Traits\StringHelpers;
use App\Support\Helpers\Traits\UiHelpers;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Log;

class AppHelpers
{
    use ArrayHelpers;
    use DateHelpers;
    use EmailHelpers;
    use FileHelpers;
    use FormHelpers;
    use StringHelpers;
    use UiHelpers;

    protected Filesystem $filesystem;

    private static AppHelpers $instance;

    public static function getInstance(): AppHelpers
    {
        if (! isset(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    public function __construct()
    {
        $this->filesystem = new Filesystem();
    }

    public function log($message)
    {
        if (! is_string($message)) {
            $message = json_encode($message);
        }
        Log::info($message);
    }
}
