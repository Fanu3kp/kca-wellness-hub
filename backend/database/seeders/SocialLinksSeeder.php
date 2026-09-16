<?php

namespace Database\Seeders;

use App\Models\SocialLink;
use Illuminate\Database\Seeder;

class SocialLinksSeeder extends Seeder
{
    public function run(): void
    {
        $links = [
            [
                'platform' => 'facebook',
                'label' => 'KCA Wellness Hub Facebook',
                'url' => 'https://www.facebook.com/kcawellnesshub',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'platform' => 'instagram',
                'label' => 'KCA Wellness Hub Instagram',
                'url' => 'https://www.instagram.com/kca.wellness.hub',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'platform' => 'tiktok',
                'label' => 'KCA Wellness Hub TikTok',
                'url' => 'https://www.tiktok.com/@kcawellnesshub',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'platform' => 'linkedin',
                'label' => 'KCA Wellness Hub LinkedIn',
                'url' => 'https://www.linkedin.com/company/kca-wellness-hub',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'platform' => 'x',
                'label' => 'KCA Wellness Hub X',
                'url' => 'https://x.com/kcawellnesshub',
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'platform' => 'youtube',
                'label' => 'KCA Wellness Hub YouTube',
                'url' => 'https://www.youtube.com/@kcawellnesshub',
                'sort_order' => 6,
                'is_active' => true,
            ],
            [
                'platform' => 'whatsapp',
                'label' => 'KCA Wellness Hub WhatsApp',
                'url' => 'https://wa.me/254700000000',
                'sort_order' => 7,
                'is_active' => true,
            ],
            [
                'platform' => 'website',
                'label' => 'KCA Wellness Hub Website',
                'url' => 'https://kcawellnesshub.example.test',
                'sort_order' => 8,
                'is_active' => true,
            ],
        ];

        foreach ($links as $link) {
            SocialLink::updateOrCreate(['platform' => $link['platform']], $link);
        }
    }
}
