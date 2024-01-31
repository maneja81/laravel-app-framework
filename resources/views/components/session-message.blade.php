@props([
    'type' => 'success',
])
@php
    if ($type == 'success') {
        $class = 'flex px-4 py-4 text-white bg-teal-500 rounded-lg sm:px-5';
    }
    if ($type == 'error') {
        $class = 'flex px-4 py-4 text-white bg-red-500 rounded-lg sm:px-5';
    }
    if ($type == 'info') {
        $class = 'flex px-4 py-4 text-white bg-blue-300 rounded-lg sm:px-5';
    }
    if ($type == 'message') {
        $class = 'flex px-4 py-4 rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-500 dark:text-navy-100 sm:px-5';
    }

@endphp
@if (session()->has($type))
    <div {{ $attributes->merge(['class' => $class]) }}>
        {!! session()->get($type) !!}
    </div>
@endif
