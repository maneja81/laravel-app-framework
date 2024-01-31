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

<body class="min-h-100vh leading-normal is-scrollbar-hidden dark:bg-slate-900 dark:text-white @yield('body-classes')">
    <div id="wrapper">
        @yield('content')
    </div>
    @vite('resources/js/app.js')
</body>

</html>
