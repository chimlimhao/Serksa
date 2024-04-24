<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Course;
use App\Models\Chapter;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
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
                return view("auth.course.home", compact('user', 'course', 'chapter'));
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

                // Defined the path for both folders
                $finished_dir = storage_path("app/markdown/course/HTML/finished_html/"); // dir path for finished html
                $unfinished_dir = storage_path("app/markdown/course/HTML/unhighlighted_html/"); //dir path for unfinished html
                $chapter_number = $chapter->chapter_order;
                $file_name = "chapter{$chapter_number}";
                $full_unfinished_path = $unfinished_dir.$file_name.".html" ; //Full file path for unfinished html file
                $full_finished_path = $finished_dir.$file_name.".html"; // Full file path for finished html file

                if (file_exists($full_finished_path)) {
                    try {
                        $parsedContent = File::get($full_finished_path);
                        // dd($parsedContent); // Debugging check
                        return view("auth.course.doc", compact("user", "course", "chapter", "parsedContent"));
                    } catch (Exception $e) {
                        // Handle file retrieval error
                        dd($e->getMessage()); // Debugging error message
                    }
                }
                else if (file_exists($full_unfinished_path)){
                    $parsedContent = File::get($full_unfinished_path);
                    // dd($parsedContent);

                    // Get the python script to run and highlight the freshly rendered HTML file and write it into the finished folder's file
                    $output = shell_exec('python C:\Users\Manut\Documents\VS Code\Projects\EduWeb\storage\app\markdown\parse_markdown.py');
                    // dd($output);

                    return view("auth.course.doc", compact("user","course","chapter","parsedContent"));
                }

                $doc_path = "app/markdown/course/". $course->title. "/" . "markdown/" . $file_name . ".md";
                $markdownContent = File::get(storage_path($doc_path));

                // Create a file in a specific folder path
                $full_file_path = $unfinished_dir.$file_name . ".html";
                $unfinishedFile = fopen($full_file_path,"w");

                //Check if the folder is open, write content into it if opened then close
                if($unfinishedFile){
                    // Render md content into html
                    $parsedContent = Str::of($markdownContent)->markdown();
                    $unfinishHtml = fwrite($unfinishedFile , $parsedContent);
                    fclose($unfinishedFile);
                }

                // Pass the parsed content to the view
                return view("auth.course.doc", compact('user', 'course', 'chapter', 'parsedContent'));
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
