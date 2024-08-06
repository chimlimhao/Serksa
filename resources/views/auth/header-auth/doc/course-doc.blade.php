@extends("auth.layouts.layout")

@section('header')
<nav>
    <ul>
        <li><a href="{{route('sidebar-dashboard')}}">Home</a></li>
        <li><a href="{{route('catalog')}}">Catalog</a></li>
        <li><a class="active" href="{{route('doc')}}">Documentation</a></li>
        <li><a href="{{route('community')}}">Community</a></li>
        <li><a href="{{route('pricing')}}">Pricing</a></li>
    </ul>
</nav>
@endsection

@section('sidebar')
    @include('auth.partials.sidebar')
@endsection

@section('content')
<div class="content">
    <div class="main-doc">
        <div class="doc-content">
            {!! $parsedContent !!}
        </div>
    </div>
</div>
@endsection