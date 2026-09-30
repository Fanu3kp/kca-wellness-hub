<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('staff_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('role', 50);
            $table->string('number', 50)->unique();
            $table->string('email')->nullable();
            $table->foreignId('campus_id')->nullable()->constrained()->nullOnDelete();
            $table->boolean('is_active')->default(true);
            $table->timestamp('claimed_at')->nullable();
            $table->foreignId('claimed_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();

            $table->index(['role', 'is_active']);
        });

        Schema::table('profiles', function (Blueprint $table) {
            $table->string('staff_number', 50)->nullable()->unique()->after('student_number');
        });
    }

    public function down(): void
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->dropColumn('staff_number');
        });

        Schema::dropIfExists('staff_registrations');
    }
};
