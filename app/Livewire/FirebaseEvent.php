<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\Attributes\On;

class FirebaseEvent extends Component
{
    public $path;
    public $event;

    #[On('firebase-response')]
    public function emitFirebaseResponse($data = '')
    {
        $this->dispatch($this->event, $data);
    }

    public function mount(string $path, string $event)
    {
        $this->path = $path;
        $this->event = $event;
    }

    public function render()
    {
        return view('livewire.firebase-event');
    }
}
