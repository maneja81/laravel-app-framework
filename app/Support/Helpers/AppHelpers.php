<?php
namespace App\Support\Helpers;

use App\Support\Helpers\Traits\ArrayHelpers;
use App\Support\Helpers\Traits\DateHelpers;
use App\Support\Helpers\Traits\EmailHelpers;
use App\Support\Helpers\Traits\FileHelpers;
use App\Support\Helpers\Traits\StringHelpers;
use App\Support\Helpers\Traits\UiHelpers;
use Illuminate\Support\Facades\Log;
use Illuminate\Filesystem\Filesystem;

class AppHelpers{

    use ArrayHelpers;
    use StringHelpers;
    use DateHelpers;
    use UiHelpers;
    use FileHelpers;
    use EmailHelpers;

    protected Filesystem $filesystem;

    private static AppHelpers $instance;

    public static function getInstance(): AppHelpers
    {
        if (!isset(self::$instance)) {
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
        if (!is_string($message)) {
            $message = json_encode($message);
        }
        Log::info($message);
    }

}
