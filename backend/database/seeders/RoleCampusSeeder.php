<?php

namespace Database\Seeders;

use App\Models\Campus;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleCampusSeeder extends Seeder
{
    public function run(): void
    {
        foreach ([
            ['name' => 'student', 'description' => 'Student user'],
            ['name' => 'peer_counselor', 'description' => 'Trained peer counsellor'],
            ['name' => 'guidance_staff', 'description' => 'Guidance and counselling staff'],
            ['name' => 'admin', 'description' => 'Platform administrator'],
        ] as $role) {
            Role::updateOrCreate(['name' => $role['name']], ['description' => $role['description']]);
        }

        foreach ([
            ['name' => 'Ruaraka Main', 'code' => 'RUARAKA', 'location' => 'Ruaraka', 'physical_support' => true, 'virtual_support' => true],
            ['name' => 'Town', 'code' => 'TOWN', 'location' => 'Nairobi Town Campus', 'physical_support' => true, 'virtual_support' => true],
            ['name' => 'Kitengela', 'code' => 'KITENGELA', 'location' => 'Kitengela', 'physical_support' => true, 'virtual_support' => true],
        ] as $campus) {
            Campus::updateOrCreate(['code' => $campus['code']], [
                'name' => $campus['name'],
                'location' => $campus['location'],
                'physical_support' => $campus['physical_support'],
                'virtual_support' => $campus['virtual_support'],
                'is_active' => true,
            ]);
        }
    }
}
