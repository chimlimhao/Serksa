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
                    <li><a href="">Resource</a></li>
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
                    <a href="{{route('register')}}"><button>Getting Started</button></a>
                </div>
            </div>
        </header>   
        <div class="welcome-wrap">
            <div class="first-section">
                <div class="web-context">
                    <strong>Welcome To Serksa</strong>
                    <div class="context">
                        <div class="text">
                            <p>Learn different skills for your career with Serksa.</p>
                        </div>
                        <div class="nav-btn">
                            <a href="{{route('catalog')}}"><button>Explore courses</button></a>
                            <a href=""><button>Don't know where to start?</button></a>
                        </div>
                    </div>
                </div>
                <div class="img">
                    <a href=""><img src="{{asset('assets/image/img-1.png')}}" alt=""></a>
                </div>
            </div>
            <div class="second-section">
                <h3>Recommendation</h3>
                <div class="recomm-form">
                    
                </div>
            </div>
        </div>
    </div>
    <script src="{{asset('assets/js/app.js')}}"></script>
</body>
</html>