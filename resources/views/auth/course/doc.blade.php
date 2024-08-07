@extends('auth.layouts.layout')

@section('header')
    @include('auth.partials.header')
@endsection

@section('sidebar')
    @include('auth.course.sidebar.sidebar')
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
                <div class="course-navbar">
                    <ul>
                        <li>
                            <a href="{{ route('course-content', ['courseId' => $courses->id, 'chapterId' => $chapters->id]) }}"><span>Home</span></a>
                        </li>
                        <li>
                            <a href="{{route('course-learning-mat', ['courseId' => $courses->id, 'chapterId' => $chapters->id])}}"><span>Learning Material</span></a>
                        </li>
                        <li class="active">
                            <a href="{{ route('course-doc', ['courseId' => $courses->id, 'chapterId' => $chapters->id]) }}"><span>Documentation</span></a>
                        </li>
                    </ul>
                </div>
                <div class="course-content">
                    @if($chapters)
                        {{-- Display chapter details --}}
                        <h3>Chapter {{$chapters->chapter_order}}:</h3>
                        <h3>{{ $chapters->chapter_title }}</h3>
                    @else
                        <h3>No Chapter Found</h3>
                    @endif
                </div>
                <div class="course-doc">
                    {{-- Use Blade directive to render Markdown content --}}
                    {!! $parsedContent !!}

                </div>

            </div>
        </div>
    </div>
    <script src="{{asset('assets/js/codeblock.js')}}"></script>
</div>
@endsection
