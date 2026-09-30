<?php

namespace Database\Seeders;

use App\Models\StaffRegistration;
use Illuminate\Database\Seeder;

/**
 * Pre-approves the peer counsellor and guidance staff numbers that may be
 * claimed during registration. Numbers are deliberately left unclaimed so a
 * real person can register with them.
 */
class StaffRegistrationSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            // Peer counsellor numbers
            ['role' => StaffRegistration::ROLE_PEER_COUNSELOR, 'number' => 'PC-1001'],
            ['role' => StaffRegistration::ROLE_PEER_COUNSELOR, 'number' => 'PC-1002'],
            ['role' => StaffRegistration::ROLE_PEER_COUNSELOR, 'number' => 'PC-1003'],
            ['role' => StaffRegistration::ROLE_PEER_COUNSELOR, 'number' => 'PC-1004'],
            ['role' => StaffRegistration::ROLE_PEER_COUNSELOR, 'number' => 'PC-1005'],
            ['role' => StaffRegistration::ROLE_PEER_COUNSELOR, 'number' => 'PC-1006'],

            // Guidance staff numbers
            ['role' => StaffRegistration::ROLE_GUIDANCE_STAFF, 'number' => 'GS-2001'],
            ['role' => StaffRegistration::ROLE_GUIDANCE_STAFF, 'number' => 'GS-2002'],
            ['role' => StaffRegistration::ROLE_GUIDANCE_STAFF, 'number' => 'GS-2003'],
            ['role' => StaffRegistration::ROLE_GUIDANCE_STAFF, 'number' => 'GS-2004'],

            // Head of department numbers
            ['role' => StaffRegistration::ROLE_HOD, 'number' => 'HOD-3001'],
            ['role' => StaffRegistration::ROLE_HOD, 'number' => 'HOD-3002'],
            ['role' => StaffRegistration::ROLE_HOD, 'number' => 'HOD-3003'],
        ];

        foreach ($rows as $row) {
            StaffRegistration::firstOrCreate(
                ['number' => $row['number']],
                $row + ['is_active' => true]
            );
        }
    }
}
