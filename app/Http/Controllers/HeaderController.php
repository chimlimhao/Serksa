<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Chapter;
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
        if (Auth::check()){
            $users = Auth::user();
            $courses = Course::all();
            $markdownContent = File::get(storage_path("app/markdown/default.md"));
            // dd($markdownContent);
            $parsedContent = Str::of($markdownContent)->markdown();
            return view("auth.header-auth.document",compact("users", "courses", "parsedContent"));
        }
        return view("auth.header-unauth.document");
    }

    public function community(){
        if (Auth::check()){
            $users = Auth::user();
            $courses = Course::all();
            $chapters = Chapter::all();
            return view("auth.header-auth.community",compact("users", "courses","chapters"));
        }
        return view("auth.header-unauth.community");
    }

    public function pricing(){
        if (Auth::check()){
            $users = Auth::user();
            $courses = Course::all();
            $chapters = Chapter::all();
            return view("auth.header-auth.pricing",compact("users", "courses","chapters"));
        }
        return view("auth.header-unauth.pricing");
    }
    public function logout(){
        Auth::logout();
        return view('unauth.welcome');
    }
}
