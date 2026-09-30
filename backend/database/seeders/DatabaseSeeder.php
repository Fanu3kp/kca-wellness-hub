<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RoleCampusSeeder::class,
            StaffRegistrationSeeder::class,
            UserSeeder::class,
            BookingProviderSeeder::class,
            ContentSeeder::class,
            SocialLinksSeeder::class,
            DemoCounsellingSeeder::class,
        ]);
    }
}
