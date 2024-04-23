<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Chapter;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use App\Providers\MarkdownServiceProvider;
use League\CommonMark\CommonMarkConverter;

class CatalogController extends Controller
{
    protected $markdownService;

    public function __construct(MarkdownServiceProvider $markdownService)
    {
        $this->markdownService = $markdownService;
    }
    public function card()
    {
        $courses = Course::all();

        if (Auth::check()) {
            $user = Auth::user();
            return view('auth.header-auth.catalog', compact('user', 'courses'));
        } else {
            return view('unauth.header-unauth.catalog', compact('courses'));
        }
    }

    public function courseContent($courseId, $chapterId)
    {
        if (Auth::check()) {
            $user = Auth::user();
            // Retrieve the course and chapter details using the IDs
            $course = Course::findOrFail($courseId);
            $chapter = Chapter::findOrFail($chapterId);


            // Check if $chapter is not null before using it
            if ($chapter) {
                return view("auth.catalog.course", compact('user', 'course', 'chapter'));
            } else {
                // Handle the case where $chapter is null, such as redirecting or showing an error message
                return redirect()->back()->with('error', 'Chapter not found');
            }
        } else {
            return redirect(route("login"));
        }
    }

    public function courseDoc($courseId, $chapterId)
    {
        // Check if the user is authenticated
        if (Auth::check()) {
            $user = Auth::user();
            // Retrieve the course and chapter details using the IDs
            $course = Course::findOrFail($courseId);
            $chapter = Chapter::findOrFail($chapterId);
            
            // Check if $chapter is not null before using it
            if ($chapter) {
                // Retrieve the Markdown content from the Chapter model
                $markdownContent = $chapter->chapter_doc;
                $doc_path = "app/markdown/course/". $course->title. "/" . $markdownContent;

                // Parse the Markdown content using MarkdownService
                $parsedContent = File::get(storage_path($doc_path));
                // $parsedContent = Str::of($markdownContent)->markdown();


                // Pass the parsed content to the view
                return view("auth.catalog.doc", compact('user', 'course', 'chapter', 'parsedContent'));
            } else {
                // Handle the case where $chapter is null, such as redirecting or showing an error message
                return redirect()->route('catalog')->with('error', 'Chapter not found');
            }
        } else {
            // Redirect to the login page if the user is not authenticated
            return redirect(route("login"));
        }
    }




    // public function html(){
    //     if(Auth::check()){
    //         $user = Auth::user();
    //         return view("auth.catalog.html",["user"=> $user]);
    //     }else{
    //         return redirect(route("login"));
    //     }
    // }

}
