<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'img',
        'description',
        'difficulty',
        'price',
        'is_free'
    ];

    // this function indicating that in each course there are multiple chapters
    public function chapters(){
        return $this->hasMany(Chapter::class);
    }
}
