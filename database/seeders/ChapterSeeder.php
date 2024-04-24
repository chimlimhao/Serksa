<?php

namespace Database\Seeders;

use App\Models\Chapter;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ChapterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // $htmlIntroduction = File::get(storage_path("/app/markdown/course/html/chapter1.md"));
        
        // Example data for chapters
        $chapters = [
            // Chapters for HTML course
            [
                'course_id' => 1,
                'chapter_title' => 'Introduction to HTML',
                'chapter_desc' => 'Learn the basics of HTML.',
                'chapter_video' => 'https://example.com/html-intro-video',
                'chapter_doc' => 'chapter1',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 1,
                'chapter_title' => 'HTML Elements',
                'chapter_desc' => 'Explore different HTML elements.',
                'chapter_video' => 'https://example.com/html-elements-video',
                'chapter_doc' => 'default',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 1,
                'chapter_title' => 'HTML Forms',
                'chapter_desc' => 'Learn how to create forms in HTML.',
                'chapter_video' => 'https://example.com/html-forms-video',
                'chapter_doc' => 'https://example.com/html-forms-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 1,
                'chapter_title' => 'HTML Tables',
                'chapter_desc' => 'Understanding HTML table structure.',
                'chapter_video' => 'https://example.com/html-tables-video',
                'chapter_doc' => 'https://example.com/html-tables-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 1,
                'chapter_title' => 'HTML Semantics',
                'chapter_desc' => 'Dive into semantic HTML.',
                'chapter_video' => 'https://example.com/html-semantics-video',
                'chapter_doc' => 'https://example.com/html-semantics-doc',
                'chapter_order' => 5,
            ],
            // Chapters for CSS course
            [
                'course_id' => 2,
                'chapter_title' => 'Introduction to CSS',
                'chapter_desc' => 'Learn the basics of CSS styling.',
                'chapter_video' => 'https://example.com/css-intro-video',
                'chapter_doc' => 'https://example.com/css-intro-doc',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 2,
                'chapter_title' => 'CSS Selectors',
                'chapter_desc' => 'Explore CSS selector types.',
                'chapter_video' => 'https://example.com/css-selectors-video',
                'chapter_doc' => 'https://example.com/css-selectors-doc',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 2,
                'chapter_title' => 'CSS Box Model',
                'chapter_desc' => 'Understanding the CSS box model.',
                'chapter_video' => 'https://example.com/css-box-model-video',
                'chapter_doc' => 'https://example.com/css-box-model-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 2,
                'chapter_title' => 'CSS Flexbox',
                'chapter_desc' => 'Learn about CSS flexible box layout.',
                'chapter_video' => 'https://example.com/css-flexbox-video',
                'chapter_doc' => 'https://example.com/css-flexbox-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 2,
                'chapter_title' => 'CSS Grid',
                'chapter_desc' => 'Explore CSS grid layout capabilities.',
                'chapter_video' => 'https://example.com/css-grid-video',
                'chapter_doc' => 'https://example.com/css-grid-doc',
                'chapter_order' => 5,
            ],
            // Chapters for JavaScript course
            [
                'course_id' => 3,
                'chapter_title' => 'Introduction to JavaScript',
                'chapter_desc' => 'Learn the basics of JavaScript programming.',
                'chapter_video' => 'https://example.com/js-intro-video',
                'chapter_doc' => 'https://example.com/js-intro-doc',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 3,
                'chapter_title' => 'JavaScript Variables and Data Types',
                'chapter_desc' => 'Explore JavaScript variables and data types.',
                'chapter_video' => 'https://example.com/js-variables-video',
                'chapter_doc' => 'https://example.com/js-variables-doc',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 3,
                'chapter_title' => 'JavaScript Functions',
                'chapter_desc' => 'Understanding JavaScript functions and their usage.',
                'chapter_video' => 'https://example.com/js-functions-video',
                'chapter_doc' => 'https://example.com/js-functions-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 3,
                'chapter_title' => 'JavaScript DOM Manipulation',
                'chapter_desc' => 'Learn how to manipulate the DOM using JavaScript.',
                'chapter_video' => 'https://example.com/js-dom-video',
                'chapter_doc' => 'https://example.com/js-dom-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 3,
                'chapter_title' => 'JavaScript Asynchronous Programming',
                'chapter_desc' => 'Explore asynchronous programming in JavaScript.',
                'chapter_video' => 'https://example.com/js-async-video',
                'chapter_doc' => 'https://example.com/js-async-doc',
                'chapter_order' => 5,
            ],

            // Chapters for PHP course
            [
                'course_id' => 4,
                'chapter_title' => 'Introduction to PHP',
                'chapter_desc' => 'Learn the basics of PHP programming language.',
                'chapter_video' => 'https://example.com/php-intro-video',
                'chapter_doc' => 'https://example.com/php-intro-doc',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 4,
                'chapter_title' => 'PHP Functions and Arrays',
                'chapter_desc' => 'Understanding functions and arrays in PHP.',
                'chapter_video' => 'https://example.com/php-functions-video',
                'chapter_doc' => 'https://example.com/php-functions-doc',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 4,
                'chapter_title' => 'PHP Object-Oriented Programming',
                'chapter_desc' => 'Learn about object-oriented programming in PHP.',
                'chapter_video' => 'https://example.com/php-oop-video',
                'chapter_doc' => 'https://example.com/php-oop-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 4,
                'chapter_title' => 'PHP MySQL Database Connectivity',
                'chapter_desc' => 'Connect PHP applications to MySQL databases.',
                'chapter_video' => 'https://example.com/php-mysql-video',
                'chapter_doc' => 'https://example.com/php-mysql-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 4,
                'chapter_title' => 'PHP Frameworks',
                'chapter_desc' => 'Explore popular PHP frameworks like Laravel and Symfony.',
                'chapter_video' => 'https://example.com/php-frameworks-video',
                'chapter_doc' => 'https://example.com/php-frameworks-doc',
                'chapter_order' => 5,
            ],
            // Chapters for C course
            [
                'course_id' => 5,
                'chapter_title' => 'Introduction to C Programming',
                'chapter_desc' => 'Learn the basics of C programming language.',
                'chapter_video' => 'https://example.com/c-intro-video',
                'chapter_doc' => 'https://example.com/c-intro-doc',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 5,
                'chapter_title' => 'C Data Types and Operators',
                'chapter_desc' => 'Understanding data types and operators in C.',
                'chapter_video' => 'https://example.com/c-data-types-video',
                'chapter_doc' => 'https://example.com/c-data-types-doc',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 5,
                'chapter_title' => 'C Control Structures',
                'chapter_desc' => 'Explore control structures like loops and conditionals in C.',
                'chapter_video' => 'https://example.com/c-control-structures-video',
                'chapter_doc' => 'https://example.com/c-control-structures-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 5,
                'chapter_title' => 'C Functions and Pointers',
                'chapter_desc' => 'Understanding functions and pointers in C programming.',
                'chapter_video' => 'https://example.com/c-functions-video',
                'chapter_doc' => 'https://example.com/c-functions-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 5,
                'chapter_title' => 'C File Handling',
                'chapter_desc' => 'Learn about file handling in C programming.',
                'chapter_video' => 'https://example.com/c-file-handling-video',
                'chapter_doc' => 'https://example.com/c-file-handling-doc',
                'chapter_order' => 5,
            ],

            // Chapters for C++ course
            [
                'course_id' => 6,
                'chapter_title' => 'Introduction to C++ Programming',
                'chapter_desc' => 'Learn the basics of C++ programming language.',
                'chapter_video' => 'https://example.com/cpp-intro-video',
                'chapter_doc' => 'https://example.com/cpp-intro-doc',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 6,
                'chapter_title' => 'C++ Classes and Objects',
                'chapter_desc' => 'Understanding classes and objects in C++.',
                'chapter_video' => 'https://example.com/cpp-classes-video',
                'chapter_doc' => 'https://example.com/cpp-classes-doc',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 6,
                'chapter_title' => 'C++ Inheritance and Polymorphism',
                'chapter_desc' => 'Explore inheritance and polymorphism in C++.',
                'chapter_video' => 'https://example.com/cpp-inheritance-video',
                'chapter_doc' => 'https://example.com/cpp-inheritance-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 6,
                'chapter_title' => 'C++ Templates and Exceptions',
                'chapter_desc' => 'Understanding templates and exceptions in C++.',
                'chapter_video' => 'https://example.com/cpp-templates-video',
                'chapter_doc' => 'https://example.com/cpp-templates-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 6,
                'chapter_title' => 'C++ Standard Template Library (STL)',
                'chapter_desc' => 'Explore the C++ STL for data structures and algorithms.',
                'chapter_video' => 'https://example.com/cpp-stl-video',
                'chapter_doc' => 'https://example.com/cpp-stl-doc',
                'chapter_order' => 5,
            ],

            // Chapters for C# course
            [
                'course_id' => 7,
                'chapter_title' => 'Introduction to C# Programming',
                'chapter_desc' => 'Learn the basics of C# programming language.',
                'chapter_video' => 'https://example.com/csharp-intro-video',
                'chapter_doc' => 'https://example.com/csharp-intro-doc',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 7,
                'chapter_title' => 'C# Data Types and Control Structures',
                'chapter_desc' => 'Understanding data types and control structures in C#.',
                'chapter_video' => 'https://example.com/csharp-data-types-video',
                'chapter_doc' => 'https://example.com/csharp-data-types-doc',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 7,
                'chapter_title' => 'C# Classes and Objects',
                'chapter_desc' => 'Explore classes and objects in C# programming.',
                'chapter_video' => 'https://example.com/csharp-classes-video',
                'chapter_doc' => 'https://example.com/csharp-classes-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 7,
                'chapter_title' => 'C# Inheritance and Polymorphism',
                'chapter_desc' => 'Understanding inheritance and polymorphism in C#.',
                'chapter_video' => 'https://example.com/csharp-inheritance-video',
                'chapter_doc' => 'https://example.com/csharp-inheritance-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 7,
                'chapter_title' => 'C# Exception Handling and File I/O',
                'chapter_desc' => 'Learn about exception handling and file I/O in C#.',
                'chapter_video' => 'https://example.com/csharp-io-video',
                'chapter_doc' => 'https://example.com/csharp-io-doc',
                'chapter_order' => 5,
            ],

            // Chapters for SQL course
            [
                'course_id' => 8,
                'chapter_title' => 'Introduction to SQL',
                'chapter_desc' => 'Learn the basics of Structured Query Language (SQL).',
                'chapter_video' => 'https://example.com/sql-intro-video',
                'chapter_doc' => 'https://example.com/sql-intro-doc',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 8,
                'chapter_title' => 'SQL Data Manipulation Language (DML)',
                'chapter_desc' => 'Explore SQL for data manipulation operations.',
                'chapter_video' => 'https://example.com/sql-dml-video',
                'chapter_doc' => 'https://example.com/sql-dml-doc',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 8,
                'chapter_title' => 'SQL Data Definition Language (DDL)',
                'chapter_desc' => 'Understanding SQL for data definition operations.',
                'chapter_video' => 'https://example.com/sql-ddl-video',
                'chapter_doc' => 'https://example.com/sql-ddl-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 8,
                'chapter_title' => 'SQL Queries and Joins',
                'chapter_desc' => 'Learn about SQL queries and different types of joins.',
                'chapter_video' => 'https://example.com/sql-queries-video',
                'chapter_doc' => 'https://example.com/sql-queries-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 8,
                'chapter_title' => 'SQL Indexing and Optimization',
                'chapter_desc' => 'Explore SQL indexing and query optimization techniques.',
                'chapter_video' => 'https://example.com/sql-indexing-video',
                'chapter_doc' => 'https://example.com/sql-indexing-doc',
                'chapter_order' => 5,
            ],

            // Chapters for Ruby course
            [
                'course_id' => 9,
                'chapter_title' => 'Introduction to Ruby',
                'chapter_desc' => 'Learn the basics (Ruby).',
                'chapter_video' => 'https://example.com/sql-intro-video',
                'chapter_doc' => 'https://example.com/sql-intro-doc',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 9,
                'chapter_title' => 'Ruby Functions',
                'chapter_desc' => 'Explore Ruby Simplicity',
                'chapter_video' => 'https://example.com/sql-dml-video',
                'chapter_doc' => 'https://example.com/sql-dml-doc',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 9,
                'chapter_title' => 'Ruby Library',
                'chapter_desc' => 'Understanding Ruby Library.',
                'chapter_video' => 'https://example.com/sql-ddl-video',
                'chapter_doc' => 'https://example.com/sql-ddl-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 9,
                'chapter_title' => 'Ruby',
                'chapter_desc' => 'Learn about Ruby loops',
                'chapter_video' => 'https://example.com/sql-queries-video',
                'chapter_doc' => 'https://example.com/sql-queries-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 9,
                'chapter_title' => 'Ruby',
                'chapter_desc' => 'Explore Ruby Syntax',
                'chapter_video' => 'https://example.com/sql-indexing-video',
                'chapter_doc' => 'https://example.com/sql-indexing-doc',
                'chapter_order' => 5,
            ],

            // Chapters for Python course
            [
                'course_id' => 10,
                'chapter_title' => 'Introduction to Python',
                'chapter_desc' => 'Learn the basics of Python programming language.',
                'chapter_video' => 'https://example.com/python-intro-video',
                'chapter_doc' => 'https://example.com/python-intro-doc',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 10,
                'chapter_title' => 'Python Data Structures',
                'chapter_desc' => 'Explore various data structures in Python.',
                'chapter_video' => 'https://example.com/python-data-structures-video',
                'chapter_doc' => 'https://example.com/python-data-structures-doc',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 10,
                'chapter_title' => 'Python Functions and Modules',
                'chapter_desc' => 'Understanding functions and modules in Python.',
                'chapter_video' => 'https://example.com/python-functions-video',
                'chapter_doc' => 'https://example.com/python-functions-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 10,
                'chapter_title' => 'Python Object-Oriented Programming',
                'chapter_desc' => 'Learn about object-oriented programming in Python.',
                'chapter_video' => 'https://example.com/python-oop-video',
                'chapter_doc' => 'https://example.com/python-oop-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 10,
                'chapter_title' => 'Python File Handling',
                'chapter_desc' => 'Explore file handling in Python programming.',
                'chapter_video' => 'https://example.com/python-file-handling-video',
                'chapter_doc' => 'https://example.com/python-file-handling-doc',
                'chapter_order' => 5,
            ],

            // Chapters for Java course
            [
                'course_id' => 11,
                'chapter_title' => 'Introduction to Java Programming',
                'chapter_desc' => 'Learn the basics of Java programming language.',
                'chapter_video' => 'https://example.com/java-intro-video',
                'chapter_doc' => 'https://example.com/java-intro-doc',
                'chapter_order' => 1,
            ],
            [
                'course_id' => 11,
                'chapter_title' => 'Java Classes and Objects',
                'chapter_desc' => 'Understanding classes and objects in Java.',
                'chapter_video' => 'https://example.com/java-classes-video',
                'chapter_doc' => 'https://example.com/java-classes-doc',
                'chapter_order' => 2,
            ],
            [
                'course_id' => 11,
                'chapter_title' => 'Java Inheritance and Polymorphism',
                'chapter_desc' => 'Explore inheritance and polymorphism in Java.',
                'chapter_video' => 'https://example.com/java-inheritance-video',
                'chapter_doc' => 'https://example.com/java-inheritance-doc',
                'chapter_order' => 3,
            ],
            [
                'course_id' => 11,
                'chapter_title' => 'Java Collections Framework',
                'chapter_desc' => 'Learn about collections in Java programming.',
                'chapter_video' => 'https://example.com/java-collections-video',
                'chapter_doc' => 'https://example.com/java-collections-doc',
                'chapter_order' => 4,
            ],
            [
                'course_id' => 11,
                'chapter_title' => 'Java File Handling and I/O',
                'chapter_desc' => 'Understanding file handling and I/O operations in Java.',
                'chapter_video' => 'https://example.com/java-io-video',
                'chapter_doc' => 'https://example.com/java-io-doc',
                'chapter_order' => 5,
            ],


            // Add more chapters for other courses
        ];


        // Insert chapters into the database
        foreach ($chapters as $chapterData) {
            Chapter::create($chapterData);
        }
    }
}
