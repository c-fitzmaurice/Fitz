@extends('_layouts.master')

@section('title', 'Projects')

@section('content')
    <h1>Projects</h1>

    @foreach ($projects->sortBy('rank') as $project)
        <div class="mb-8 w-full lg:w-2/3">
            <h2 class="text-lg text-black font-bold">{{ $project->title }}</h2>
            <p class="text-grey-darkest text-base leading-normal my-2">{{ $project->description }}</p>
            <a href="{{ $project->link }}" target="_blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">View project here &RightArrow;</a>
        </div>
    @endforeach
@endsection
