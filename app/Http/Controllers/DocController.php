<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Course;
use App\Models\Chapter;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class DocController extends Controller
{
    public function docContent($courseId)
    {
        try {
            $course = Course::findOrFail($courseId);
            $courses = Course::all();
            $parsedContent = null; // Initialize parsedContent

            $base_dir = storage_path("app/markdown/course/{$course->title}/");
            if (is_dir($base_dir)) {
                $doc_dir = $base_dir . "markdown/";
                $full_doc_path = $doc_dir . "full-doc-ver.md";
                if (file_exists($full_doc_path)) {
                    $markdownContent = File::get($full_doc_path);
                    $parsedContent = Str::of($markdownContent)->markdown();
                }
            }
        } catch (ModelNotFoundException $e) {
            // Handle the case where the course with the given ID is not found
            return redirect()->route('catalog')->with('error', 'Course not found');
        }

        // Check if the user is authenticated
        if (Auth::check()) {
            $users = Auth::user();
            return view("auth.header-auth.doc.course-doc", compact("users", "courses", "parsedContent"));
        }
        return view("unauth.header-unauth.doc.course-doc", compact("courses", "parsedContent"));
    }

}