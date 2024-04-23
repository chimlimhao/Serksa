@extends('unauth.layouts.auth-layout')

@section('auth-button')
    <a href="{{route('login')}}"><button>Sign In</button></a>
@endsection

@section('content')
    <div class="first-section">
        <div class="img">
            <a href=""><img src="{{asset('assets/image/img-1.png')}}" alt=""></a>
        </div>
        <div class="auth-form">
            {{-- auth form on the side side --}}
            <form action="">
                @csrf
                <h4>Sign Up</h4>
                <input type="text" name="username" placeholder="Username">
                <input type="email" name="email" placeholder="Email">
                <input type="password" name="password" placeholder="Password">
                <button>Sign Up</button>
                <p><b>Or sign up using:</b></p>
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