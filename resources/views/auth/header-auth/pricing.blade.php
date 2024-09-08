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
            @foreach ($pricings as $pricing)
            <a onclick="purchaseProduct({{$pricing->id}})">
                <div class="card">
                    <div class="card-header">
                        <div class="header-title">
                            <h3>{{ $pricing->title }}</h3>
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="">
                        </div>
                        @if ($pricing->title == 'Pro')
                            <div class="real-price">
                                <s>${{ $pricing->amount }}</s>
                                <p>/Month</p>
                            </div>
                            <div class="price">
                                <h3>${{ $pricing->amount - 10 }}</h3>
                                <p>/Month</p>
                            </div>
                        @else
                            <div class="price">
                                <h3>${{ $pricing->amount }}</h3>
                                <p>/Month</p>
                            </div>
                        @endif
                        <p>{{ $pricing->status }}</p>
                    </div>
                    <div class="card-middle">
                        <ul>
                        @for ($i = 3; $i > 0; $i--)
                            <li><i class="ri-check-line"></i> {{ $pricing->description }}</li>
                        @endfor
                        </ul>
                    </div>
                </div>
            </a>
            @endforeach
        </div>
        <div id="overlay"></div>
        <div id="purchasePopup">
            <div class="popup-content">
                <div id="header">
                    <img src="{{asset('assets/image/confirmation.png')}}" alt="">
                    <h3>Purchase Confirmation</h3>
                </div>
                <hr>
                <div id="content">
                    <div id="info">
                        <h4>Subscription Type  : <span id="popupProductName"></span></h4>
                        <!-- <p> : </p> -->
                        <!-- <h4><span id="popupProductName"></span></h4> -->
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="">
                    </div>
                    <div id="info">
                        <h4>Amount : $<span id="popupProductPrice"></span></h4>
                        <!-- <p> : </p> -->
                        <!-- <h4>$<span id="popupProductPrice"></span></h4> -->
                        <p>/Month </p>
                        <p> (Billed Manually)</p>
                    </div>
                </div>
                <!-- <p>Are you sure you want to purchase <span id="popupProductName"></span> for $<span id="popupProductPrice"></span>?</p> -->
                <form method="POST" target="aba_webservice" action="{{ config('payway.api_url') }}" id="aba_merchant_request">
                    @csrf
                    <input type="hidden" name="hash" id="hash">
                    <input type="hidden" name="tran_id" id="tran_id">
                    <input type="hidden" name="amount" id="amount">
                    <input type="hidden" name="firstname" id="firstname">
                    <input type="hidden" name="lastname" id="lastname">
                    <input type="hidden" name="phone" id="phone">
                    <input type="hidden" name="email" id="email">
                    <input type="hidden" name="items" id="items">
                    <input type="hidden" name="return_params" id="return_params">
                    <input type="hidden" name="shipping" id="shipping">
                    <input type="hidden" name="currency" id="currency">
                    <input type="hidden" name="type" id="type">
                    <input type="hidden" name="payment_option" id="payment_option">
                    <input type="hidden" name="merchant_id" id="merchant_id">
                    <input type="hidden" name="req_time" id="req_time">
                    <!-- <button type="submit" id="confirmPurchaseButton">Confirm Purchase</button> -->
                    <div class="button">
                        <a id="cancel" onclick="closePopup()">Cancel</a>
                        <button>Purchase</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection