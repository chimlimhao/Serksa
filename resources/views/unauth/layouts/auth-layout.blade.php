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
            <nav>
                <ul>
                    <li><a href="{{route('catalog')}}">Catalog</a></li>
                    <li><a href="">Documentation</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="">Pricing</a></li>
                </ul>
            </nav>
            <div class="header-content">
                <div class="search-bar">
                    <button><i class="ri-search-line"></i></button>
                    <input type="text" placeholder="Search...">
                </div>
                <div class="auth">
                    @yield('auth-button')                
                </div>
            </div>
        </header>   
        <div class="container-content">
            @yield('content')
        </div>
    </div>
    <script src="{{asset('assets/js/app.js')}}"></script>
</body>
</html>