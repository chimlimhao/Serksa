<?php

use Database\Seeders\ChapterSeeder;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HeaderController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\SidebarController;

Route::get('/', function () {
    return redirect()->route('home');
});
// Admin Page
Route::get('/create-admin', [AdminController::class, 'createAdmin']);
Route::get('/admin', [AdminController::class, 'login'])->name('login-form');
Route::get('/admin/login', [AdminController::class, 'loginAdmin'])->name('admin.login');

Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin-dashboard');

// Welcome page
Route::get('/welcome',[HeaderController::class, 'index'])->name('home'); 
Route::get('/catalog',[HeaderController::class, 'catalog'])->name('catalog');

// Catalog
Route::get('/catalog/{courseId}/{chapterId}', [CatalogController::class, 'courseContent'])->name('course-content');
Route::get('/catalog/{courseId}/{chapterId}/doc', [CatalogController::class, 'courseDoc'])->name('course-doc');
// Route::get('/catalog/learn-html', [CatalogController::class, 'html'])->name('learn-html');

// Authentication For User
Route::get('/register', [AuthController::class, 'register'])->name('register');
Route::get('/login', [AuthController::class,'login'])->name('login');

// Auth User Sidebar
Route::get('/dashboard', [SidebarController::class,'dashboard'])->name('sidebar-dashboard');
Route::get('/course', [SidebarController::class,'course'])->name('sidebar-course');

// Social Login
Route::get('/auth/{provider}/redirect', [SocialController::class, 'redirect'])->where('provider', 'github|google');
Route::get('/auth/{provider}/callback', [SocialController::class, 'callback'])->where('provider', 'github|google');

// Logout
Route::get('/logout',[HeaderController::class, 'logout'])->name('logout');

Route::middleware('auth')->group(function () {
});
// Route::group(['middleware' => 'admin'], function () {
//     Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
//     // Other admin-specific routes...
// });


