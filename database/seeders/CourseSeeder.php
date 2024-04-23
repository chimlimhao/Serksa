<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Sample data for courses
        $courses = [
            [
                'title' => 'HTML',
                'img' => 'https://cdn-icons-png.flaticon.com/128/174/174854.png',
                'description' => 'Introduction to Hypertext Markup Language (HTML).',
                'difficulty' => 'Beginner',
                'price' => 0,
                'is_free' => true,
            ],
            [
                'title' => 'CSS',
                'img' => 'https://cdn-icons-png.flaticon.com/128/732/732190.png',
                'description' => 'Introduction to Cascading Style Sheets (CSS).',
                'difficulty' => 'Beginner',
                'price' => 0,
                'is_free' => true,
            ],
            [
                'title' => 'JavaScript',
                'img' => 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png',
                'description' => 'Introduction to JavaScript and its role in web development.',
                'difficulty' => 'Intermediate',
                'price' => 29.99,
                'is_free' => false,
            ],
            [
                'title' => 'PHP',
                'img' => 'https://cdn-icons-png.flaticon.com/128/5968/5968332.png',
                'description' => 'Introduction to PHP and its use in web development.',
                'difficulty' => 'Intermediate',
                'price' => 49.99,
                'is_free' => false,
            ],
            [
                'title' => 'C',
                'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1r6s2yRd1CEDG9c9Rjc3TXKd8heGaRIcXo8OQoAndHg&s',
                'description' => 'Introduction to the C programming language.',
                'difficulty' => 'Intermediate',
                'price' => 39.99,
                'is_free' => false,
            ],
            [
                'title' => 'C++',
                'img' => 'https://cdn-icons-png.flaticon.com/128/6132/6132222.png',
                'description' => 'Introduction to C++ and its object-oriented programming features.',
                'difficulty' => 'Intermediate',
                'price' => 59.99,
                'is_free' => false,
            ],
            [
                'title' => 'C#',
                'img' => 'https://cdn-icons-png.flaticon.com/128/6132/6132221.png',
                'description' => 'Introduction to C# programming language by Microsoft.',
                'difficulty' => 'Intermediate',
                'price' => 69.99,
                'is_free' => false,
            ],
            [
                'title' => 'SQL',
                'img' => 'https://cdn-icons-png.flaticon.com/128/2772/2772128.png',
                'description' => 'Introduction to SQL and its use in managing relational databases.',
                'difficulty' => 'Intermediate',
                'price' => 29.99,
                'is_free' => false,
            ],
            [
                'title' => 'Ruby',
                'img' => 'https://cdn-icons-png.flaticon.com/128/919/919842.png',
                'description' => 'Introduction to Ruby programming language known for its simplicity.',
                'difficulty' => 'Intermediate',
                'price' => 39.99,
                'is_free' => false,
            ],
            [
                'title' => 'Python',
                'img' => 'https://cdn-icons-png.flaticon.com/128/5968/5968350.png',
                'description' => 'Introduction to Python programming language emphasizing simplicity and readability.',
                'difficulty' => 'Intermediate',
                'price' => 49.99,
                'is_free' => false,
            ],
            [
                'title' => 'Java',
                'img' => 'https://cdn-icons-png.flaticon.com/128/5968/5968282.png',
                'description' => 'Introduction to Java programming language with object-oriented principles.',
                'difficulty' => 'Intermediate',
                'price' => 59.99,
                'is_free' => false,
            ],
        ];

        // Insert the sample data into the courses table
        foreach ($courses as $course) {
            Course::create($course);
        }
    }

}
