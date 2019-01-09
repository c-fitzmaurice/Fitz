@extends('_layouts.master')

@section('title', 'Contact')

@section('content')
    <h1>Contact</h1>

    <hr>

    <form name="contact" action="/contact/sent" method="post" netlify-honeypot="bot-field" netlify>
        {{-- Form Subject --}}
        <input type="hidden" name="subject" value="Fitz-Maurice Contact Page" />
        {{-- After Redirect --}}
        <input type="hidden" name="after" value="{{ $page->production ? $page->baseUrl : 'http://localhost:3000' }}/contact/sent" />
        {{-- Honeypot --}}
        <input type="hidden" name="bot-field" />

        {{-- Name --}}
        <div>
            <label for="name">Name</label><br>
            <input type="text" name="name" id="name" required>
        </div>

        {{-- Email --}}
        <div>
            <label for="email">Email</label><br>
            <input type="email" name="email" id="email" required>
        </div>

        {{-- Message --}}
        <div>
            <label for="message">Message</label><br>
            <textarea name="message" id="message" required></textarea>
        </div>

        <input type="submit" value="Send">
    </form>
@endsection
