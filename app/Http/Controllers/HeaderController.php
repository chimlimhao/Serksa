<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Chapter;
use App\Models\Pricing;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class HeaderController extends Controller
{
    public function index(){
        if(Auth::check()){
            $users = Auth::user();
            return view('auth.welcome')->with('user', $users);
        }else{
            return view('unauth.welcome');
        }
    }
    
    public function catalog()
    {
        $courses = Course::all();

        if (Auth::check()) {
            $users = Auth::user();
            return view('auth.header-auth.catalog', compact('users', 'courses'));
        } else {
            return view('unauth.header-unauth.catalog', compact('courses'));
        }
    }
    public function doc(){
        $courses = Course::all();
        $markdownContent = File::get(storage_path("app/markdown/default.md"));
        $parsedContent = Str::of($markdownContent)->markdown();
        if (Auth::check()){
            $users = Auth::user();
            // dd($markdownContent);
            return view("auth.header-auth.document",compact("users", "courses", "parsedContent"));
        }
        return view("unauth.header-unauth.document", compact("courses", "parsedContent"));
    }

    public function community(){
        $courses = Course::all();
        $chapters = Chapter::all();
        if (Auth::check()){
            $users = Auth::user();
            return view("auth.header-auth.community",compact("users", "courses","chapters"));
        }
        return view("unauth.header-unauth.community");
    }

    public function pricing(){
        $pricings = Pricing::all();
        if (Auth::check()){
            $users = Auth::user();
            return view("auth.header-auth.pricing",compact("users", "pricings"));
        }
        return view("unauth.header-unauth.pricing", compact("pricings"));
    }
    public function logout(){
        Auth::logout();
        return view('unauth.welcome');
    }
}
