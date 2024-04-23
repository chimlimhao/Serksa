<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::guard('admins')->check()) {
            Log::info('AdminMiddleware: User not authenticated. Redirecting to login.');
            return redirect()->route('admin.login');
        }

        Log::info('AdminMiddleware: User authenticated. Proceeding to next middleware or controller.');
        return $next($request);
    }
}
