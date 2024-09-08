@extends('unauth.layouts.layout')

@section('header')
    @include('unauth.partials.header')
@endsection

<!-- @section('sidebar')
    @include('unauth.partials.sidebar')
@endsection -->

@section('content')
    <div class="sidebar-wrap">
        @include('unauth.partials.sidebar')
    </div>
    <div class="content">
        <div class="catalog-wrap">
            <div class="main">
                <h3>Explore the catalog</h3>
                <div class="course-cards">
                    @foreach ($courses as $course)
                        @php
                            $firstChapter = $course->chapters()->first();
                            $chapterId = $firstChapter ? $firstChapter->id : null;
                        @endphp
    
                        <a
                            href="{{ $firstChapter ? route('course-content', ['courseId' => $course->id, 'chapterId' => $chapterId]) : '#' }}">
                            <div class="course-card">
                                <div class="head-card">
                                    <img src="{{ $course->img }}" alt="{{ $course->title }}">
                                </div>
                                <div class="middle-card">
                                    <h4>{{ $course->title }}</h4>
                                    <br>
                                    <h6>Difficulty:</h6>
                                    <h5>{{ $course->difficulty }}</h5>
                                    <p>{{ $course->description }}</p>
                                </div>
                                <div class="footer-card">
                                    @if ($course->is_free)
                                        <h5>Free Course</h5>
                                    @else
                                        <h5>Price: ${{ $course->price }}</h5>
                                    @endif
                                </div>
                            </div>
                        </a>
                    @endforeach
                </div>
    
                <h3>Popular Courses</h3>
                <div class="course-cards">
                    @php $count = 0; @endphp
                    @foreach ($courses as $course)
                        @php
                            $firstChapter = $course->chapters()->first();
                            $chapterId = $firstChapter ? $firstChapter->id : null;
                        @endphp
    
                        @if ($count < 5)
                            <!-- Limit to the first 5 courses -->
                            @php $count++; @endphp
                            <a
                                href="{{ $firstChapter ? route('course-content', ['courseId' => $course->id, 'chapterId' => $chapterId]) : '#' }}">
                                <div class="course-card">
                                    <div class="head-card">
                                        <img src="{{ $course->img }}" alt="{{ $course->title }}">
                                    </div>
                                    <div class="middle-card">
                                        <h4>{{ $course->title }}</h4>
                                        <br>
                                        <h6>Difficulty:</h6>
                                        <h5>{{ $course->difficulty }}</h5>
                                        <p>{{ $course->description }}</p>
                                    </div>
                                    <div class="footer-card">
                                        @if ($course->is_free)
                                            <h5>Free Course</h5>
                                        @else
                                            <h5>Price: ${{ $course->price }}</h5>
                                        @endif
                                    </div>
                                </div>
                            </a>
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
