<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="no-js h-full @yield('html-classes')">

<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title', 'Untitled') - {{ env('APP_NAME') }}</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Quicksand:wght@700&display=swap" rel="stylesheet">
    @vite('resources/css/app.css')
    @stack('header')
</head>

<body class="h-full">
    <div class="flex min-h-full">
        <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-16 xl:px-16">
            <div class="w-full max-w-sm mx-auto lg:w-96">
                @yield('content')
                <div class="mt-10">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div class="w-full border-t border-gray-200"></div>
                        </div>
                        <div class="relative flex justify-center text-sm font-medium leading-6">
                            <span class="px-6 text-gray-900 bg-white">Or continue with</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-6">
                        <a href="{{ route('social.auth.redirect', ['provider' => 'google']) }}" class="flex items-center justify-center w-full gap-3 px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
                            <x-svg src="simple-icons/google" />
                            <span class="text-sm font-semibold leading-6">Google</span>
                        </a>
                        <a href="{{ route('auth.login', ['view' => 'magic-link']) }}" class="flex items-center justify-center w-full gap-3 px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
                            <x-svg src="feather/code" />
                            <span class="text-sm font-semibold leading-6">Magic Link</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative flex-1 hidden w-0 lg:block">
            {{-- <img class="absolute inset-0 object-cover w-full h-full" src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt=""> --}}
            <div class="absolute z-10 w-full h-screen overflow-hidden bg-black opacity-70"></div>
            <video autoplay muted loop class="absolute inset-0 z-0 w-auto min-w-full min-h-full max-w-none">
                <source src="{{url('videos/bikefomers-auth.mp4')}}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    @vite('resources/js/app.js')
</body>

</html>
