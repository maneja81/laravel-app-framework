@props([
    'name' => $attributes->wire('model')->value ?? '',
    'rounded' => true,
    'theme' => 'primary',
    'info' => '',
    'iconLeft' => '',
    'iconRight' => 'feather/activity',
])
@php
    $buttonClass[] = 'button';
    $themeClass = [
        'black' => 'text-white bg-gray-800 hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800',
        'gray' => 'text-white bg-gray-500 hover:bg-gray-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
        'success' => 'text-white bg-teal-500 hover:bg-teal-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
        'primary' => 'text-white bg-blue-600 hover:bg-blue-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
        'danger' => 'text-white bg-red-500 hover:bg-red-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
        'warning' => 'text-white bg-yellow-500 hover:bg-yellow-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
        'white' => 'text-gray-800 bg-white hover:bg-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
    ];
    $buttonClass[] = $themeClass[$theme];
    if($rounded) {
        $buttonClass[] = 'rounded-lg';
    }
    $buttonClass = implode(' ', $buttonClass);
@endphp
<button {{ $attributes->merge(['class' => $buttonClass]) }}>{{ $slot }}</button>
