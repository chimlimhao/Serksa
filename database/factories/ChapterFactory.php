<?php

namespace Database\Factories;

use App\Models\Chapter;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chapter>
 */
class ChapterFactory extends Factory
{
    protected $model = Chapter::class;

    public function definition()
    {
        return [
            'course_id' => $this->faker->randomDigitNotNull,
            'chapter_title' => $this->faker->sentence,
            'chapter_desc' => $this->faker->paragraph,
            'chapter_video' => $this->faker->url,
            'chapter_doc' => $this->faker->url,
            'chapter_order' => $this->faker->numberBetween(1, 10),
        ];
    }
}
