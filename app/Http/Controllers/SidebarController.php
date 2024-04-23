<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SidebarController extends Controller
{
    public function dashboard(){
        $user = Auth::user(); // Get the authenticated user
        return view('auth.sidebar-auth.dashboard')->with('user', $user);
    }

    public function course(){
        $user = Auth::user();
        return view('auth.sidebar-auth.course')->with('user', $user);
    }
}
