@extends("unauth.layouts.layout")

@section('header')
    <nav>
        <ul>
            <li><a href="{{route('catalog')}}">Catalog</a></li>
            <li><a href="{{route('doc')}}">Documentation</a></li>
            <li><a href="{{route('community')}}">Community</a></li>
            <li><a class="active" href="{{route('pricing')}}">Pricing</a></li>
        </ul>
    </nav>
@endsection



@section('content')
@endsection