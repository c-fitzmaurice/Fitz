@extends('_layouts.master')

@section('title', 'About')

@section('content')
    <h1>About</h1>

    <p>My name is {{ $page->social->name }}</p>

    <h2>Links:</h2>

    <ul>
        <li><a href="{{ $page->social->twitter }}" target="_blank">Twitter</a></li>
        <li><a href="{{ $page->social->github }}" target="_blank">GitHub</a></li>
        <li><a href="{{ $page->social->linkedin }}" target="_blank">LinkedIn</a></li>
    </ul>
@endsection
