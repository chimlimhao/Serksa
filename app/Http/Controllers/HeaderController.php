<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HeaderController extends Controller
{
    public function index(){
        if(Auth::check()){
            $user = Auth::user();
            return view('auth.welcome')->with('user', $user);
        }else{
            return view('unauth.welcome');
        }
    }
    
    public function catalog()
    {
        $courses = Course::all();

        if (Auth::check()) {
            $user = Auth::user();
            return view('auth.header-auth.catalog', compact('user', 'courses'));
        } else {
            return view('unauth.header-unauth.catalog', compact('courses'));
        }
    }

    public function logout(){
        Auth::logout();
        return view('unauth.welcome');
    }
}
