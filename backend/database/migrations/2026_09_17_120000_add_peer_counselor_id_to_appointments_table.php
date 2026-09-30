<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->foreignId('peer_counselor_id')->nullable()->constrained('users')->nullOnDelete()->after('booking_provider_id');
            $table->string('attendee_mode', 20)->default('peer')->after('mode');
        });
    }

    public function down(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->dropConstrainedForeignId('peer_counselor_id');
            $table->dropColumn('attendee_mode');
        });
    }
};
