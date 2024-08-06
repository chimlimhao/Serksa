@extends('auth.layouts.layout')

@section('header')
    <nav>
        <ul>
            <li><a class="active" href="{{route('sidebar-dashboard')}}">Home</a></li>
            <li><a href="{{route('catalog')}}">Catalog</a></li>
            <li><a href="{{route('doc')}}">Documentation</a></li>
            <li><a href="{{route('community')}}">Community</a></li>
            <li><a href="{{route('pricing')}}">Pricing</a></li>
        </ul>
    </nav>
@endsection

@section('sidebar')
    <div class="side-nav">
        <ul>
            <li class="active"><a href="{{ route('sidebar-dashboard') }}"><i
                        class="ri-dashboard-line"></i><span>Dashboard</span></li></a>
            <li><a href="{{ route('sidebar-course') }}"><i class="ri-book-open-line"></i><span>Courses</span></li></a>
            <li><a href=""><i class="ri-code-s-slash-line"></i><span>Test</span></li></a>
            <li><a href=""><i class="ri-shapes-line"></i></i><span>Projects</span></li></a>
            <li><a href=""><i class="ri-align-item-bottom-line"></i><span>Goal</span></li></a>
        </ul>
    </div>
@endsection

@section('content')
<div class="content">
    <div class="progress-wrap">
        <h2>My Learning Progress</h2>
        <div class="progress">
            <div class="progress-card">
                <div class="progress-bar">
                    <div class="progress-bar-animation" data-done="59" id="progress-percentage-1">
                        <p>59%</p>
                    </div>
                </div>
                <div class="progress-context">
                    Course
                    <h4>Course Name</h4>
                    <s>Current Modules:</s>
                </div>
                <div class="resume">
                    <a href="#">
                        <p>Resume</p>
                        <span>></span>
                    </a>
                </div>
            </div>
            <div class="progress-card">
                <div class="progress-bar">
                    <div class="progress-bar-animation" data-done="33" id="progress-percentage-2">
                        <p>33%</p>
                    </div>
                </div>
                <div class="progress-context">
                    Course
                    <h4>Course Name</h4>
                    <s>Current Modules:</s>
                </div>
                <div class="resume">
                    <a href="#">
                        <p>Resume</p>
                        <span>></span>
                    </a>
                </div>
            </div>
            <div class="progress-card">
                <div class="progress-bar">
                    <div class="progress-bar-animation" data-done="80" id="progress-percentage-3">
                        <p>80%</p>
                    </div>
                </div>
                <div class="progress-context">
                    Course
                    <h4>Course Name</h4>
                    <s>Current Modules:</s>
                </div>
                <div class="resume">
                    <a href="#">
                        <p>Resume</p>
                        <span>></span>
                    </a>
                </div>
            </div>
            <div class="progress-card">
                <div class="progress-bar">
                    <div class="progress-bar-animation" data-done="12" id="progress-percentage-4">
                        <p>12%</p>
                    </div>
                </div>
                <div class="progress-context">
                    Course
                    <h4>Course Name</h4>
                    <s>Current Modules:</s>
                </div>
                <div class="resume">
                    <a href="#">
                        <p>Resume</p>
                        <span>></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="view-all">
            <a href="{{route('catalog')}}">
                <span><--</span>
                <p>View All Courses</p>
                <span>--></span>
            </a>
        </div>
    </div>
</div>
@endsection
