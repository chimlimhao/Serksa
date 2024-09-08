<?php

namespace App\Http\Controllers;

use App\Models\Pricing;
use App\Services\PayWayService; // Import the service
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PayWayController extends Controller
{
    protected $payWayService;

    public function __construct(PayWayService $payWayService)
    {
        $this->payWayService = $payWayService;
    }

    // Handle purchase request and show the confirmation pop-up
    public function getProductDetails($id)
    {
        $pricing = Pricing::findOrFail($id);

        // Return the data as JSON for the confirmation pop-up
        return response()->json([
            'id' => $pricing->id,
            'title' => $pricing->title,
            'amount' => $pricing->amount,
            'status' => $pricing->status,
            'description' => $pricing->description
        ]);
    } 
    public function purchase($id)
    {
        $pricing = Pricing::findOrFail($id);

        // Generate required data for PayWay
        $req_time = time();
        $transactionId = $req_time;
        $amount = $pricing->amount;
        $firstName = "John";
        $lastName = "Doe";
        $phone = "010101010";
        $email = "John@gmail.com";
        $return_params = 'Thank you for your purchase!';
        $type = 'purchase';
        $currency = 'USD';
        $shipping = '0.00';
        $merchant_id = config('payway.merchant_id');
        $payment_option = ''; // Default or user-chosen option

        $items = base64_encode(json_encode([
            ['title' => $pricing->title, 'quantity' => '1', 'amount' => $amount]
        ]));

        $hash = $this->payWayService->getHash(
            $req_time . $merchant_id . $transactionId . $amount . $items . $shipping .
            $firstName . $lastName . $email . $phone . $type . $payment_option .
            $currency . $return_params
        );

        return response()->json([
            'id' => $pricing->id,
            'title' => $pricing->title,
            'amount' => $pricing->amount,
            'description' => $pricing->description,
            'hash' => $hash,
            'transactionId' => $transactionId,
            'firstName' => $firstName,
            'lastName' => $lastName,
            'phone' => $phone,
            'email' => $email,
            'items' => $items,
            'return_params' => $return_params,
            'shipping' => $shipping,
            'currency' => $currency,
            'type' => $type,
            'payment_option' => $payment_option,
            'merchant_id' => $merchant_id,
            'req_time' => $req_time,
        ]);
    }

}
