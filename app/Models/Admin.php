<?php

namespace App\Models;

use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Admin extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "email",
        "password",
    ];

    // Encrypt The password before passing to database **Recommended to handle the encryption here than in controller since model is directly working with database. We can reuse this method in everywhere related to admin
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
}
