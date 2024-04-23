<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
    rel="stylesheet">
    
    <link rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <title>EduWeb</title>
</head>
<body>
    <div class="container">
        <header>
            <a href="{{route('home')}}"><img src="{{asset('assets/image/logo.png')}}" alt="Web Logo"></a>
            @yield('header')
            <div class="header-content">
                <div class="search-bar">
                    <button><i class="ri-search-line"></i></button>
                    <input type="text" placeholder="Search...">
                </div>
                <div class="user-profile">
                    <a href="#"><i class="fas fa-bell"></i></a>
                    {{-- <p>{{$user->name}}</p> --}}
                    <a href="#"><img src="{{$user->avatar}}" alt="Profile Picture" onclick="toggleProfileMenu()"></a>
                    <div class="sub-menu-wrap" id="subMenu">
                        <div class="sub-menu">
                            <div class="user-info">
                                <a href="#"><img src="{{$user->avatar}}" alt="Profile Picture"></a>
                                <h3>{{$user->name}}</h3>
                            </div>
                            <hr>
                            <a href="#"><i class="fa-solid fa-user"></i>
                                <p>Profile</p>
                                <span>></span>
                            </a>
                            <a href="#"><i class="fa-solid fa-money-bill"></i>
                                <p>Payment + Billing</p><span>></span></a>
                            <a href="#"><i class="fa-solid fa-gear"></i>
                                <p>Privacy & Setting</p>
                                <span>></span>
                            </a>
                            <a href="{{route('catalog')}}"><i class="fa-solid fa-house"></i>
                                <p>My Home</p>
                                <span>></span>
                            </a>
                            <a href="#"><i class="fa-solid fa-circle-info"></i>
                                <p>Help Center</p>
                                <span>></span>
                            </a>
                            <hr>
                            <a href="{{route('logout')}}">Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>   
        <div class="body-content">
            <div class="sidebar-wrap">
                @yield('sidebar')
            </div>
            <div class="content">
                @yield('content')
            </div>
        </div>
    </div>
    <script src="{{asset('assets/js/app.js')}}"></script>
</body>
</html>