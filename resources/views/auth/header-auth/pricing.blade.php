@extends("auth.layouts.layout")

@section('header')
<nav>
    <ul>
        <li><a href="{{route('sidebar-dashboard')}}">Home</a></li>
        <li><a href="{{route('catalog')}}">Catalog</a></li>
        <li><a  href="{{route('doc')}}">Documentation</a></li>
        <li><a href="{{route('community')}}">Community</a></li>
        <li><a class="active"href="{{route('pricing')}}">Pricing</a></li>
    </ul>
</nav>
@endsection


@section('content')
<div class="pricing-content">
    <div class="subscription-wrap">
        <div class="sub-header">
            <h1>Subscription Plan</h1>
        </div>
        <div class="sub-card">
            <div class="card">
                <div class="card-header">
                    <div class="header-title">
                        <h3>Basic</h3>
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="">
                    </div>
                    <div class="price">
                        <h3>$0</h3>
                    </div>
                    <p>Always Free</p>
                </div>
                <div class="card-middle">
                    <ul>
                        <li><i class="ri-check-line">Free HTML & CSS cources</i></li>
                        <li><i class="ri-check-line">Free HTML & CSS cources</i></li>
                        <li><i class="ri-check-line">Free HTML & CSS cources</i></li>
                    </ul>
                </div>
                <div class="card-footer">
                    <a href="">Get Started</a>
                </div>
            </div>
            <div class="pro-card">
                <div class="card-header">
                    <div class="header-title">
                        <h3>Pro</h3>
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="">
                    </div>
                    <div class="real-price">
                        <s>$34.99</s>
                        <p>/Month</p>
                    </div>
                    <div class="price">
                        <h3>$24.99</h3>
                        <p>/Month</p>
                    </div>
                    <p>Billed manually</p>
                </div>
                <div class="card-middle">
                    <ul>
                        <li><i class="ri-check-line">Free HTML & CSS cources</i></li>
                        <li><i class="ri-check-line">Free HTML & CSS cources</i></li>
                        <li><i class="ri-check-line">Free HTML & CSS cources</i></li>
                    </ul>
                </div>
                <div class="card-footer">
                    <a href="">Get Started</a>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <div class="header-title">
                        <h3>Plus</h3>
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="">
                    </div>
                    <div class="price">
                        <h3>$9.99</h3>
                        <p>/Month</p>
                    </div>
                    <p>Billed manually</p>
                </div>
                <div class="card-middle">
                    <ul>
                        <li><i class="ri-check-line">Free HTML & CSS cources</i></li>
                        <li><i class="ri-check-line">Free HTML & CSS cources</i></li>
                        <li><i class="ri-check-line">Free HTML & CSS cources</i></li>
                    </ul>
                </div>
                <div class="card-footer">
                    <a href="">Try Plus For Free</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection