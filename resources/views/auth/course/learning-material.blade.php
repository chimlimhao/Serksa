@extends("auth.layouts.layout")

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
                <a href="{{route('catalog')}}">
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
                        <li class="active">
                            <a href="{{route('course-learning-mat', ['courseId' => $course->id, 'chapterId' => $chapter->id])}}"><span>Learning Material</span></a>
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
                <div class="main-material">
                    <div class="video">
                        <iframe width="560" 
                        height="315" 
                        src="{{$chapter->chapter_video}}"     
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div class="video-desc">
                        {!! $parsedContent !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection