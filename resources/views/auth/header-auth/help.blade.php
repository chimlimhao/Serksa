@extends("auth.layouts.layout")

@section('header')
<nav>
    <ul>
        <li><a href="{{route('sidebar-dashboard')}}">Home</a></li>
        <li><a href="{{route('catalog')}}">C5 batalog</a></li>
        <li><a class="active" href="{{route('doc')}}">Documentation</a></li>
        <li><a href="{{route('sidebar-dashboard')}}">Community</a></li>
        <li><a href="{{route('sidebar-dashboard')}}">Pricing</a></li>
    </ul>
</nav>
@endsection



@section('content')
@endsection