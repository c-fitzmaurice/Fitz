<!DOCTYPE html>
<html lang="en" class="bg-grey font-sans">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>{{ $page->site_name }}</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>
    <body class="bg-white border-solid border-t-4 border-black flex flex-col min-h-screen">
        {{-- @include('_partials.menu') --}}
        <div class="container">
            @yield('body')
        </div>
        {{-- @include('_partials.footer') --}}
        {{-- <script src="/js/manifest.js"></script> --}}
        {{-- <script src="/js/vendor.js"></script> --}}
        {{-- <script src="/js/main.js"></script> --}}
    </body>
</html>
