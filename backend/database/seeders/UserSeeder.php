<?php

namespace Database\Seeders;

use App\Models\Campus;
use App\Models\Profile;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $campuses = Campus::all();
        $users = [
            [
                'name' => 'Wellness Admin',
                'email' => 'admin@example.test',
                'roles' => ['admin'],
                'student_number' => null,
                'campus' => $campuses->first(),
            ],
            [
                'name' => 'Peer Counsellor Demo',
                'email' => 'counsellor@example.test',
                'roles' => ['peer_counselor'],
                'student_number' => null,
                'campus' => $campuses->first(),
            ],
            [
                'name' => 'Guidance Staff Demo',
                'email' => 'guidance@example.test',
                'roles' => ['guidance_staff'],
                'student_number' => null,
                'campus' => $campuses->first(),
            ],
            [
                'name' => 'Student Demo',
                'email' => 'student@example.test',
                'roles' => ['student'],
                'student_number' => 'KCA-DEMO-001',
                'campus' => $campuses->first(),
            ],
        ];

        foreach ($users as $data) {
            $user = User::updateOrCreate(
                ['email' => $data['email']],
                [
                    'name' => $data['name'],
                    'password' => Hash::make('password'),
                    'email_verified_at' => now(),
                    'is_active' => true,
                ]
            );

            $user->roles()->sync(
                Role::whereIn('name', $data['roles'])->pluck('id')->all()
            );

            Profile::updateOrCreate(['user_id' => $user->id], [
                'campus_id' => $data['campus']->id,
                'student_number' => $data['student_number'],
                'preferences' => ['notifications' => true],
            ]);
}

    }
}
