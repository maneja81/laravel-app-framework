@extends('layouts.auth')
@section('title', 'Sign in or Create an account')
@section('content')
    @livewire('auth-forms', ['form_type' => 'default'])
@endsection
