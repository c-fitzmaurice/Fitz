<!DOCTYPE html>
<html lang="en" class="bg-grey-light font-sans leading-tight antialiased">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    {{-- Title --}}
    <title>
        @yield('title')
        {{ !empty($__env->yieldContent('title')) ? ' | ' : '' }}
        {{ $page->site->title }}
    </title>
    {{-- Favicons --}}
    @include('_partials.head.favicon')
    {{-- Extra Meta --}}
    @include('_partials.head.meta')
    {{-- CSS & Fonts --}}
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
</head>
<body class="bg-white border-solid border-t-4 border-fitz flex flex-col min-h-screen">
    <main class="container flex-grow">
        <aside>
            {{-- Logo --}}
            <img src="{{ $page->imageCdn('me/Colin_Fitz-Maurice.jpg') }}" class="h-48 w-48 border-2 border-grey-light rounded-full">
        </aside>
        <section>
            @include('_partials.menu')
            <article>
                @yield('content')
            </article>
        </section>
    </main>

    @include('_partials.footer')

    <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
    @includeWhen($page->production, '_partials.analytics')
</body>
</html>
