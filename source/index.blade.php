@extends('_layouts.master')

@section('content')
<div class="text-lg text-gray-700 leading-normal spaced-y-6 pt-6 w-full lg:w-2/3">
    <p>Hello. I’m Colin Fitz-Maurice, a full-stack Laravel and Vue developer, building awesome products for <a class="link" href="{{ $page->social->happycog }}">@happycog</a> and living in Philadelphia.</p>

    <p>
        You can see some of my work on <a class="link" href="{{ $page->social->github }}">GitHub</a>,
        follow me on <a class="link" href="{{ $page->social->twitter }}">Twitter</a>
        or email me at <a class="link" href="mailto:{{ $page->email }}">{{ $page->email }}</a>.
    </p>

    <p>I’m taking on a select project list at the moment, if you want to chat, please <a class="link" href="/contact">submit a request here</a> and check out some of my <a class="link" href="/projects">past projects</a>.</p>
</div>
@endsection
