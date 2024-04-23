<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('chapters', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->string('chapter_title');
            $table->text('chapter_desc')->nullable(); // Changed to text for longer descriptions
            $table->string('chapter_video')->nullable();
            $table->text('chapter_doc')->nullable();
            $table->unsignedInteger('chapter_order');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('chapters');
    }
};
