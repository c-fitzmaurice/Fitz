@extends('_layouts.master')

@section('title', 'Projects')

@section('content')
    <h1 class="text-3xl font-bold">Projects</h1>

    @foreach ($projects->sortBy('rank') as $project)
        <div class="mb-8 w-full lg:w-2/3">
            <h2 class="text-xl text-black font-bold">{{ $project->title }}</h2>
            <p class="text-gray-700 text-base leading-normal my-2">{!! $project->description !!}</p>
            <a href="{{ $project->link }}" target="_blank" aria-label="View {{ $project->title }}" class="text-gray-700 hover:text-black text-sm no-underline hover:underline">View project here &RightArrow;</a>
        </div>
    @endforeach
@endsection
