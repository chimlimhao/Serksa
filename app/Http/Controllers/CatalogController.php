<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Course;
use App\Models\Chapter;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
            $users = Auth::user();
            return view('auth.header-auth.catalog', compact('users', 'courses'));
        } else {
            return view('unauth.header-unauth.catalog', compact('courses'));
        }
    }

    public function courseContent($courseId, $chapterId)
    {
        if (Auth::check()) {
            $users = Auth::user();
            // Retrieve the course and chapter details using the IDs
            $courses = Course::findOrFail($courseId);
            $chapters = Chapter::findOrFail($chapterId);


            // Check if $chapter is not null before using it
            if ($chapters) {
                return view("auth.course.home", compact('users', 'courses', 'chapters'));
            } else {
                // Handle the case where $chapter is null, such as redirecting or showing an error message
                return redirect()->back()->with('error', 'Chapter not found');
            }
        } else {
            return redirect(route("login"));
        }
    }

    public function courseLearningMaterial($courseId, $chapterId)
    {
        // Check if the user is authenticated
        if (Auth::check()) {
            $users = Auth::user();
            // Retrieve the course and chapter details using the IDs
            $courses = Course::findOrFail($courseId);
            $chapters = Chapter::findOrFail($chapterId);


            // Check if $chapter is not null before using it
            if ($chapters) {
                // Define the base directory path for the course
                $baseDir = storage_path("app/markdown/course/{$courses->title}/");

                // Check if the course directory exists
                if (is_dir($baseDir)) {
                    // Define the paths for finished and unfinished HTML files
                    $finished_dir = $baseDir . "finished_html/";
                    $unfinished_dir = $baseDir . "unhighlighted_html/";
                    $markdown_dir = $baseDir . "markdown/";
                    // make dynamic chapter number
                    $chapter_number = $chapters->chapter_order;
                    $file_name = "chapter{$chapter_number}";
                    // $chapter_markdown = "chapter{$chapter_number}";
                    $default_markdown = "default";

                    $defaultToHtml = $unfinished_dir . $default_markdown . ".html";
                    // dd($defaultToHtml);
                    $full_unfinished_path = $unfinished_dir . $file_name . ".html";
                    $full_chapter_path = $unfinished_dir . $file_name . ".html";
                    // dd($full_chapter_path);
                    $full_finished_path = $finished_dir . $file_name . ".html";
                    $full_chapter_markdown_path = $markdown_dir . $file_name . ".md";
                    $full_default_markdown_path = $markdown_dir . $default_markdown. ".md";

                    // Check the finished folder, if there are finished content there. pass it to blade view if so.
                    if (file_exists($full_finished_path)) {
                        try {
                            $parsedContent = File::get($full_finished_path);
                            return view("auth.course.learning-material", compact("users", "courses", "chapters", "parsedContent"));
                        } catch (Exception $e) {
                            // Handle file retrieval error
                            dd($e->getMessage()); // Debugging error message
                        }
                    }
                    // Check the unfinished folder if there are freshly rendered html there, highlight it if there is through python script.
                    else if (file_exists($full_unfinished_path)) {
                        $parsedContent = File::get($full_unfinished_path);
                        // Run Python script to highlight HTML content
                        $output = shell_exec('python path_to_parse_markdown.py');
                        return view("auth.course.learning-material", compact("users", "courses", "chapters", "parsedContent"));
                    }
                    /* Check the markdown folder for the chapter markdown content. if there is, extract it into controller and parse/render it.
                    Then create a new html file in the unhighlight folder and pass the freshly rendered html there.
                    */
                    // dd($full_chapter_markdown_path);
                    else if (file_exists($full_chapter_markdown_path)) {
                        $markdownContent = File::get($full_chapter_markdown_path);
                        // dd($markdownContent);

                        $file_path = fopen($full_chapter_path, "w");
                        if ($file_path) {
                            $parsedContent = Str::of($markdownContent)->markdown();
                            $writeToFile = fwrite($file_path, $parsedContent);
                            fclose($file_path);
                        }
                        return view("auth.course.learning-material", compact("users", "courses", "chapters", "parsedContent"));
                    } 
                    // The last condition used to display the default markdown content if there are no chapter's doc content.
                    else if (file_exists($full_default_markdown_path)) {
                        $markdownContent = File::get($full_default_markdown_path);
                        $file_path = fopen($defaultToHtml, "w");
                        if ($file_path) {
                            $parsedContent = Str::of($markdownContent)->markdown();
                            $writeToFile = fwrite($file_path, $parsedContent);
                            fclose($file_path);
                        }
                        return view("auth.course.learning-material", compact("users", "courses", "chapters", "parsedContent"));
                    }

                } else {
                    // Handle the case where course directory doesn't exist
                    return redirect()->route('catalog')->with('error', 'Course directory not found');
                }
            } else {
                // Handle the case where $chapter is null, such as redirecting or showing an error message
                return redirect()->route('catalog')->with('error', 'Chapter not found');
            }
        } else {
            // Redirect to the login page if the user is not authenticated
            return redirect(route("login"));
        }
    }

    public function courseDoc($courseId, $chapterId)
    {
        // Check if the user is authenticated
        if (Auth::check()) {
            $users = Auth::user();
            // Retrieve the course and chapter details using the IDs
            $courses = Course::findOrFail($courseId);
            $chapters = Chapter::findOrFail($chapterId);


            // Check if $chapter is not null before using it
            if ($chapters) {
                // Define the base directory path for the course
                $baseDir = storage_path("app/markdown/course/{$courses->title}/");

                // Check if the course directory exists
                if (is_dir($baseDir)) {
                    // Define the paths for finished and unfinished HTML files
                    $finished_dir = $baseDir . "finished_html/";
                    $unfinished_dir = $baseDir . "unhighlighted_html/";
                    $markdown_dir = $baseDir . "markdown/";
                    // make dynamic chapter number
                    $chapter_number = $chapters->chapter_order;
                    $file_name = "chapter{$chapter_number}";
                    $chapter_markdown = "chapter{$chapter_number}";
                    $default_markdown = "default";

                    $defaultToHtml = $unfinished_dir . $default_markdown . ".html";
                    // dd($defaultToHtml);
                    $full_unfinished_path = $unfinished_dir . $file_name . ".html";
                    $full_finished_path = $finished_dir . $file_name . ".html";
                    $full_chapter_markdown_path = $markdown_dir . $chapter_markdown . ".md";
                    $full_default_markdown_path = $markdown_dir . $default_markdown. ".md";

                    // Check the finished folder, if there are finished content there. pass it to blade view if so.
                    if (file_exists($full_finished_path)) {
                        try {
                            $parsedContent = File::get($full_finished_path);
                            return view("auth.course.doc", compact("users", "courses", "chapters", "parsedContent"));
                        } catch (Exception $e) {
                            // Handle file retrieval error
                            dd($e->getMessage()); // Debugging error message
                        }
                    }
                    // Check the unfinished folder if there are freshly rendered html there, highlight it if there is through python script.
                    else if (file_exists($full_unfinished_path)) {
                        $parsedContent = File::get($full_unfinished_path);
                        // Run Python script to highlight HTML content
                        $output = shell_exec('python path_to_parse_markdown.py');
                        return view("auth.course.doc", compact("users", "courses", "chapters", "parsedContent"));
                    }
                    /* Check the markdown folder for the chapter markdown content. if there is, extract it into controller and parse/render it.
                    Then create a new html file in the unhighlight folder and pass the freshly rendered html there.
                    */
                    else if (file_exists($full_chapter_markdown_path)) {
                        $markdownContent = File::get($full_chapter_markdown_path);
                        $full_file_path = $full_unfinished_path;

                        $file_path = fopen($full_file_path, "w");
                        if ($file_path) {
                            $parsedContent = Str::of($markdownContent)->markdown();
                            $writeToFile = fwrite($file_path, $parsedContent);
                            fclose($file_path);
                        }
                        return view("auth.course.doc", compact("users", "courses", "chapters", "parsedContent"));
                    } 
                    // The last condition used to display the default markdown content if there are no chapter's doc content.
                    else if (file_exists($full_default_markdown_path)) {
                        $markdownContent = File::get($full_default_markdown_path);
                        $file_path = fopen($defaultToHtml, "w");
                        if ($file_path) {
                            $parsedContent = Str::of($markdownContent)->markdown();
                            $writeToFile = fwrite($file_path, $parsedContent);
                            fclose($file_path);
                        }
                        return view("auth.course.doc", compact("users", "courses", "chapters", "parsedContent"));
                    }

                } else {
                    // Handle the case where course directory doesn't exist
                    return redirect()->route('catalog')->with('error', 'Course directory not found');
                }
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
