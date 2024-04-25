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

    public function courseLearningMaterial($courseId, $chapterId)
    {
        // Check if the user is authenticated
        if (Auth::check()) {
            $user = Auth::user();
            // Retrieve the course and chapter details using the IDs
            $course = Course::findOrFail($courseId);
            $chapter = Chapter::findOrFail($chapterId);


            // Check if $chapter is not null before using it
            if ($chapter) {
                // Define the base directory path for the course
                $baseDir = storage_path("app/markdown/course/{$course->title}/");

                // Check if the course directory exists
                if (is_dir($baseDir)) {
                    // Define the paths for finished and unfinished HTML files
                    $finished_dir = $baseDir . "finished_html/";
                    $unfinished_dir = $baseDir . "unhighlighted_html/";
                    $markdown_dir = $baseDir . "markdown/";
                    // make dynamic chapter number
                    $chapter_number = $chapter->chapter_order;
                    $file_name = "chapter{$chapter_number}";
                    $chapter_markdown = "chapter{$chapter_number}.md";
                    $default_markdown = "default.md";

                    $full_unfinished_path = $unfinished_dir . $file_name . ".html";
                    $full_finished_path = $finished_dir . $file_name . ".html";
                    $full_chapter_markdown_path = $markdown_dir . $chapter_markdown;
                    $full_default_markdown_path = $markdown_dir . $default_markdown;

                    if (file_exists($full_finished_path)) {
                        try {
                            $parsedContent = File::get($full_finished_path);
                            return view("auth.course.learning-material", compact("user", "course", "chapter", "parsedContent"));
                        } catch (Exception $e) {
                            // Handle file retrieval error
                            dd($e->getMessage()); // Debugging error message
                        }
                    } elseif (file_exists($full_unfinished_path)) {
                        $parsedContent = File::get($full_unfinished_path);
                        // Run Python script to highlight HTML content
                        $output = shell_exec('python path_to_parse_markdown.py');
                        return view("auth.course.learning-material", compact("user", "course", "chapter", "parsedContent"));
                    } else if (file_exists($full_chapter_markdown_path)) {
                        $markdownContent = File::get($full_chapter_markdown_path);

                        $full_file_path = $markdown_dir . $chapter_markdown;
                        $file_path = fopen($full_unfinished_path, "w");
                        if ($file_path) {
                            $parsedContent = Str::of($markdownContent)->markdown();
                            $writeToFile = fwrite($file_path, $parsedContent);
                            fclose($file_path);
                        }
                        return view("auth.course.learning-material", compact("user", "course", "chapter", "parsedContent"));
                    } else if (file_exists($full_default_markdown_path)) {
                        $markdownContent = File::get($full_default_markdown_path);

                        $full_file_path = $markdown_dir . $default_markdown;
                        $file_path = fopen($full_file_path, "w");
                        if ($file_path) {
                            $parsedContent = Str::of($markdownContent)->markdown();
                            $writeToFile = fwrite($file_path, $parsedContent);
                            fclose($file_path);
                        }
                        return view("auth.course.learning-material", compact("user", "course", "chapter", "parsedContent"));
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
            $user = Auth::user();
            // Retrieve the course and chapter details using the IDs
            $course = Course::findOrFail($courseId);
            $chapter = Chapter::findOrFail($chapterId);

            // Check if $chapter is not null before using it
            if ($chapter) {
                // Define the base directory path for the course
                $baseDir = storage_path("app/markdown/course/{$course->title}/");

                // Check if the course directory exists
                if (is_dir($baseDir)) {
                    // Define the paths for finished and unfinished HTML files
                    $finished_dir = $baseDir . "finished_html/";
                    $unfinished_dir = $baseDir . "unhighlighted_html/";
                    $markdown_dir = $baseDir . "markdown/";
                    // make dynamic chapter number
                    $chapter_number = $chapter->chapter_order;
                    $file_name = "chapter{$chapter_number}";
                    $chapter_markdown = "chapter($chapter_number}.md";
                    $default_markdown = "default.md";

                    $full_unfinished_path = $unfinished_dir . $file_name . ".html";
                    $full_finished_path = $finished_dir . $file_name . ".html";
                    $full_chapter_markdown_path = $markdown_dir . $chapter_markdown;
                    $full_default_markdown_path = $markdown_dir . $default_markdown;

                    if (file_exists($full_finished_path)) {
                        try {
                            $parsedContent = File::get($full_finished_path);
                            return view("auth.course.doc", compact("user", "course", "chapter", "parsedContent"));
                        } catch (Exception $e) {
                            // Handle file retrieval error
                            dd($e->getMessage()); // Debugging error message
                        }
                    } elseif (file_exists($full_unfinished_path)) {
                        $parsedContent = File::get($full_unfinished_path);
                        // Run Python script to highlight HTML content
                        $output = shell_exec('python path_to_parse_markdown.py');
                        return view("auth.course.doc", compact("user", "course", "chapter", "parsedContent"));
                    } else if (file_exists($full_chapter_markdown_path)) {
                        $markdownContent = File::get($full_chapter_markdown_path);

                        $full_file_path = $markdown_dir . $chapter_markdown;
                        $file_path = fopen($full_file_path, "w");
                        if ($file_path) {
                            $parsedContent = Str::of($markdownContent)->markdown();
                            $writeToFile = fwrite($file_path, $parsedContent);
                            fclose($file_path);
                        }
                        return view("auth.course.doc", compact("user", "course", "chapter", "parsedContent"));
                    } else if (file_exists($full_default_markdown_path)) {
                        $markdownContent = File::get($full_default_markdown_path);

                        $full_file_path = $markdown_dir . $default_markdown;
                        $file_path = fopen($full_file_path, "w");
                        if ($file_path) {
                            $parsedContent = Str::of($markdownContent)->markdown();
                            $writeToFile = fwrite($file_path, $parsedContent);
                            fclose($file_path);
                        }
                        return view("auth.course.doc", compact("user", "course", "chapter", "parsedContent"));
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
