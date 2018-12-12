<!DOCTYPE html>
<html lang="en" class="bg-grey-lightest font-sans">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>{{ $page->site_name }}</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Cardo:400,700" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>
    <body class="bg-white_ border-t-4_ border-black_">
        <div id="colin" class="flex flex-col min-h-screen">
            @include('_partials.menu')
            <div class="container flex-grow mt-4">
                @yield('body')
            </div>
            @include('_partials.footer')
        </div>
        <script src="{{ mix('js/manifest.js', 'assets/build') }}"></script>
        <script src="{{ mix('js/vendor.js', 'assets/build') }}"></script>
        <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
    </body>
</html>
