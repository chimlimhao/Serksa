@extends('unauth.layouts.auth-layout')

@section('auth-button')
    <a href="{{route('register-form')}}"><button>Sign Up</button></a>
@endsection

@section('content')
<div class="first-section">
    <div class="img">
        <a href=""><img src="{{asset('assets/image/img-1.png')}}" alt=""></a>
    </div>
    <div class="auth-form">
        {{-- auth form on the side side --}}
        <form action="{{route('login')}}" method="POST">
            @csrf
            <h4>Sign In</h4>
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <button type="submit">Sign In</button>
            <p><b>Or continue with:</b></p>
            <div class="social-icons">
                <a href="/auth/google/redirect" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                <a href="/auth/facebook/redirect" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="/auth/github/redirect" class="icon"><i class="fa-brands fa-github"></i></a>
                <a href="/auth/linkedin/redirect" class="icon"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </form>
    </div>
</div>
@endsection
