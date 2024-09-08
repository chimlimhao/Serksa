<?php

namespace Database\Seeders;

use App\Models\Pricing;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PricingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pricings = [
            [
                'title' => 'Basic',
                'amount' => 0,
                'status' => 'Always Free',
                'description' => 'Free HTML & CSS cources'
            ],
            [
                'title' => 'Pro',
                'amount' => 24.99,
                'status' => 'Billed manually',
                'description' => 'Free HTML & CSS cources'
            ],
            [
                'title' => 'Plus',
                'amount' => 9.99,
                'status' => 'Billed manually',
                'description' => 'Free HTML & CSS cources'
            ],            
        ];

        // Insert pre-defined data into the table.
        foreach ($pricings as $pricing){
            Pricing::create($pricing);
        }
    }
}
