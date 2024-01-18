<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\Attributes\On;

class FirebaseTest extends Component
{
    public $fb_value = 'none';

    #[On('firebase-test-updated')]
    public function listenTestUpdated($data)
    {
        $this->fb_value = $data;
    }

    public function render()
    {
        return view('livewire.firebase-test');
    }
}
