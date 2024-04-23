<?php

namespace App\Http\Controllers;

use App\Models\Admin; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function login(){
        return view('admin.auth.login');
    }
    public function dashboard(){
        return view('admin.dashboard');
    }

    public function loginAdmin(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);


        if (!Auth::attempt($credentials)) {
            return redirect()->route('login-form')->with('error','Login detailed is not valid');
        }
    
        dd(Auth::user()); // Check the authenticated user
        return redirect()->route('admin-dashboard');
    }
    
    public function createAdmin()
    {
        $adminData = [
            // 'name' => trim('Chim Limhao'),
            'name' => 'Chim Limhao',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin123'),
        ];

        // Insert $adminData into the admin table using Eloquent
        Admin::create($adminData);

        // Optionally, you can also use raw SQL queries to insert data
        // DB::insert('INSERT INTO admins (name, email, password) VALUES (?, ?, ?)', [$adminData['name'], $adminData['email'], $adminData['password']]);
    }
}
