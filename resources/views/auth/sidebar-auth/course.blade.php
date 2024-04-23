@extends('auth.layouts.layout')

@section('header')
    <nav>
        <ul>
            <li><a class="active" href="{{route('sidebar-dashboard')}}">Home</a></li>
            <li><a href="{{route('catalog')}}">Catalog</a></li>
            <li><a href="{{route('sidebar-dashboard')}}">Resource</a></li>
            <li><a href="{{route('sidebar-dashboard')}}">Community</a></li>
            <li><a href="{{route('sidebar-dashboard')}}">Pricing</a></li>
        </ul>
    </nav>
@endsection

@section('sidebar')
    <div class="side-nav">
        <ul>
            <li><a href="{{ route('sidebar-dashboard') }}"><i
                        class="ri-dashboard-line"></i><span>Dashboard</span></li></a>
            <li class="active"><a href="{{ route('sidebar-course') }}"><i class="ri-book-open-line"></i><span>Courses</span></li></a>
            <li><a href=""><i class="ri-code-s-slash-line"></i><span>Test</span></li></a>
            <li><a href=""><i class="ri-shapes-line"></i></i><span>Projects</span></li></a>
            <li><a href=""><i class="ri-align-item-bottom-line"></i><span>Goal</span></li></a>
        </ul>
    </div>
@endsection

@section('content')
<div class="course-wrap">
    
</div>
@endsection