@extends('auth.layouts.layout')

@section('header')
    @include('auth.partials.header')
@endsection

@section('sidebar')
    @include('auth.catalog.sidebar.html-sidebar')
@endsection

@section('content')
<div class="course-wrap">
    <div class="main">
        <div class="course-content">
            <div class="back">
                <a href="{{ route('catalog') }}">
                    <i class="fa-solid fa-arrow-left"></i>
                    <span>Back to Catalog</span>
                </a>
            </div>
            <div class="main">
                <div class="main-navbar">
                    <ul>
                        <li>
                            <a href="{{ route('course-content', ['courseId' => $course->id, 'chapterId' => $chapter->id]) }}"><span>Home</span></a>
                        </li>
                        <li>
                            <a href=""><span>Learning Material</span></a>
                        </li>
                        <li class="active">
                            <a href="{{ route('course-doc', ['courseId' => $course->id, 'chapterId' => $chapter->id]) }}"><span>Documentation</span></a>
                        </li>
                    </ul>
                </div>
                <div class="main-content">
                    @if($chapter)
                        {{-- Display chapter details --}}
                        <h3>Chapter {{$chapter->chapter_order}}: {{ $chapter->chapter_title }}</h3>
                    @else
                        <h3>No Chapter Found</h3>
                    @endif
                </div>
                <div class="main-doc">
                    {{-- Use Blade directive to render Markdown content --}}
                    {!! $parsedContent !!}

                </div>
                
            </div>
        </div>
    </div>
</div>
@endsection
