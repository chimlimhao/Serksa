<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use HasFactory;

    protected $fillable = [
        "course_id",
        "chapter_title",
        "chapter_desc",
        "chapter_video",
        "chapter_doc",
        "chapter_order"
    ] ;

    // this function indicating that multiple chapters belong to a course
    public function courses(){
        return $this->belongsTo(Course::class);
    }
}
