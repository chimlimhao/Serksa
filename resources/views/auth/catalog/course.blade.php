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
                    <a href="{{route('catalog')}}">
                        <i class="fa-solid fa-arrow-left"></i>
                        <span>Back to Catalog</span>
                    </a>
                </div>
                <div class="main">
                    <div class="main-navbar">
                        <ul>
                            <li class="active">
                                <a href="{{ route('course-content', ['courseId' => $course->id, 'chapterId' => $chapter->id]) }}"><span>Home</span></a>
                            </li>
                            <li>
                                <a href=""><span>Learning Material</span></a>
                            </li>
                            <li>
                                <a href="{{ route('course-doc', ['courseId' => $course->id, 'chapterId' => $chapter->id]) }}"><span>Documentation</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="main-content">
                        @if($chapter)
                            {{-- <h3>Chapter {{$chapter->chapter_order}}: {{ $chapter->chapter_title }}</h3> --}}
                            <h3>Chapter {{$chapter->chapter_order}}: </h3>
                            <h3>{{ $chapter->chapter_title }}</h3>
                        @else
                            <h3>No Chapter Found</h3>
                        @endif
                    </div>
                    <div class="main-desc">
                        <h4>Description</h4>
                        <br>
                        @if($chapter)
                            <p>{{ $chapter->chapter_desc }}</p>
                            <div class="material">
                                <a href="{{ $chapter->chapter_video }}">
                                    <i class="ri-video-on-line">
                                        <span>Introduction To HTML Programming Language.</span>
                                    </i>
                                </a>
                            </div>
                        @else
                            <p>No Description Available</p>
                        @endif
                    </div>
                    {{-- <div class="main-content">
                        <h3>Chapter 1: Introduction To HTML</h3> 
                    </div>
                    <div class="main-desc">
                        <h4>Description</h4>
                        <br>
                        <p>Starting with HTML, it’s a learning of basic web page. How to build one, how to structure the webpage.</p>
                        <div class="material">
                            <a href="">
                                <i class="ri-video-on-line">
                                    <span>Introduction To HTML Programming Language.</span>
                                </i>
                            </a>
                        </div>
                    </div> --}}
                    <br>
                    <div class="main-learning-material">
                        <h4>Learning Materials</h4>
                        <br>
                        <p>These are the learning materials you can look into:</p>
                        <div class="material">
                            <ul>
                                <li>
                                    <a href="">
                                        <i class="ri-video-on-line">
                                            <span>Learn HTML</span>
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="ri-shapes-line">
                                            <span>Simple Project</span>
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="ri-align-item-bottom-line">
                                            <span>Goal</span>
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection