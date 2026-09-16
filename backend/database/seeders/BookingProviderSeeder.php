<?php

namespace Database\Seeders;

use App\Models\BookingProvider;
use App\Models\Campus;
use Illuminate\Database\Seeder;

class BookingProviderSeeder extends Seeder
{
    public function run(): void
    {
        $ruaraka = Campus::where('code', 'RUARAKA')->firstOrFail();
        $town = Campus::where('code', 'TOWN')->firstOrFail();
        $providers = [
            ['name' => 'Belinda Main', 'campus' => $ruaraka, 'mode' => 'main', 'env' => 'BOOKING_URL_BELINDA_MAIN', 'fallback' => 'https://example.test/book/belinda-main'],
            ['name' => 'Belinda Virtual', 'campus' => $ruaraka, 'mode' => 'virtual', 'env' => 'BOOKING_URL_BELINDA_VIRTUAL', 'fallback' => 'https://example.test/book/belinda-virtual'],
            ['name' => 'Emily Main', 'campus' => $ruaraka, 'mode' => 'main', 'env' => 'BOOKING_URL_EMILY_MAIN', 'fallback' => 'https://example.test/book/emily-main'],
            ['name' => 'Emily Virtual', 'campus' => $ruaraka, 'mode' => 'virtual', 'env' => 'BOOKING_URL_EMILY_VIRTUAL', 'fallback' => 'https://example.test/book/emily-virtual'],
            ['name' => 'Tasha Town', 'campus' => $town, 'mode' => 'main', 'env' => 'BOOKING_URL_TASHA_TOWN', 'fallback' => 'https://example.test/book/tasha-town'],
            ['name' => 'Tasha Virtual', 'campus' => $town, 'mode' => 'virtual', 'env' => 'BOOKING_URL_TASHA_VIRTUAL', 'fallback' => 'https://example.test/book/tasha-virtual'],
        ];

        foreach ($providers as $index => $provider) {
            BookingProvider::updateOrCreate(
                ['name' => $provider['name'], 'mode' => $provider['mode']],
                [
                    'campus_id' => $provider['campus']->id,
                    'external_booking_url' => env($provider['env'], $provider['fallback']),
                    'is_active' => true,
                    'sort_order' => $index,
                ]
            );
        }
    }
}
