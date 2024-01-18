@extends('layouts.app')
@section('title', 'Welcome')
@section('content')
    <div class="p-8">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget.
    </div>
    <div class="p-8">
        <div>Firebase Test</div>
        <div>
            @livewire('firebase-test')
        </div>
    </div>
@endsection
