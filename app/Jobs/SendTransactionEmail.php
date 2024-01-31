<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendTransactionEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $to;
    public $subject;
    public $view;
    public $data;

    public function __construct($to, $subject, $view, $data)
    {
        $this->to = $to;
        $this->subject = $subject;
        $this->view = $view;
        $this->data = $data;
    }

    public function handle(): void
    {
        helpers()->sendEmail($this->to, $this->subject, $this->view, $this->data);
    }
}
