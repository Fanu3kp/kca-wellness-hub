<?php

namespace Database\Seeders;

use App\Models\Campus;
use App\Models\Event;
use App\Models\SocialLink;
use App\Models\TrainingModule;
use App\Models\WellnessResource;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        $campus = Campus::where('code', 'RUARAKA')->firstOrFail();

        $resources = [
            ['title' => 'Managing Academic Stress', 'category' => 'academic', 'summary' => 'Practical study and stress-management strategies.'],
            ['title' => 'Mindful Breathing Basics', 'category' => 'mindfulness', 'summary' => 'A short guide to grounding and breathing exercises.'],
            ['title' => 'Building Supportive Relationships', 'category' => 'relationships', 'summary' => 'Communication and boundary-setting ideas.'],
        ];

        foreach ($resources as $resource) {
            WellnessResource::updateOrCreate(['slug' => Str::slug($resource['title'])], [
                'campus_id' => $campus->id,
                'title' => $resource['title'],
                'summary' => $resource['summary'],
                'body' => 'Demo content only. Replace with reviewed wellness guidance before production use.',
                'category' => $resource['category'],
                'audience' => 'student',
                'is_published' => true,
                'published_at' => now(),
            ]);
        }

        Event::updateOrCreate(['slug' => 'wellness-walk-ruaraka'], [
            'campus_id' => $campus->id,
            'title' => 'Wellness Walk',
            'description' => 'A non-sensitive demo wellness event.',
            'starts_at' => now()->addDays(14)->setTime(10, 0),
            'ends_at' => now()->addDays(14)->setTime(11, 0),
            'location' => 'Ruaraka Main Campus',
            'capacity' => 50,
            'is_published' => true,
            'published_at' => now(),
        ]);

        TrainingModule::updateOrCreate(['slug' => 'active-listening-basics'], [
            'title' => 'Active Listening Basics',
            'description' => 'Demo training module for peer support skills.',
            'duration_minutes' => 45,
            'level' => 'beginner',
            'is_published' => true,
        ]);

        SocialLink::updateOrCreate(['platform' => 'instagram'], [
            'label' => 'KCA Wellness Hub',
            'url' => 'https://example.test/kca-wellness',
            'sort_order' => 1,
            'is_active' => true,
        ]);
    }
}
