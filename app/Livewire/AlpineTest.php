<?php

namespace App\Livewire;

use Livewire\Component;

class AlpineTest extends Component
{
    public $title = 'This is initial title.';

    public $content = 'This is the initial content.';

    public $result = '';

    public function save()
    {
        $this->result = 'Title: '.$this->title.'<br>Content: '.$this->content;
    }

    public function render()
    {
        return view('livewire.alpine-test');
    }
}
