<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">

        <link rel="preconnect" href="https://rsms.me/">
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css">

        @routes
        @vite(['resources/js/app.js', "resources/js/pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased text-neutral-900 selection:bg-cyan-600 selection:text-white">
        @inertia
    </body>
</html>
