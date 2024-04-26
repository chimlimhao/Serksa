<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SidebarController extends Controller
{
    public function dashboard(){
        $users = Auth::user(); // Get the authenticated user
        return view('auth.header-auth.home.dashboard', compact('users'));
    }

    public function course(){
        $users = Auth::user();
        return view('auth.header-auth.home.course', compact('users'));
    }
}
