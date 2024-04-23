<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    protected $model = Course::class;

    public function definition()
    {
        $title = $this->faker->unique()->word;
        $count = Course::where('title', $title)->count();
    
        while ($count > 0) {
            $title = $this->faker->unique()->word;
            $count = Course::where('title', $title)->count();
        }
    
        return [
            'title' => $title,
            'img' => $this->faker->imageUrl,
            'description' => $this->faker->paragraph,
            'difficulty' => $this->faker->randomElement(['Beginner', 'Intermediate', 'Advanced']),
            'price' => $this->faker->randomFloat(2, 0, 100),
            'is_free' => $this->faker->boolean,
        ];
    }
    
}