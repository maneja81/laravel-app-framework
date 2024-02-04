<?php

namespace Database\Seeders;

use App\Models\Motorcycle;
use Illuminate\Database\Seeder;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MotorcycleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $motorcycles = (new Filesystem())->get(public_path('json/motorcycles.json'));
        $motorcycles = json_decode($motorcycles, true);

        foreach ($motorcycles as $motorcycle) {
            $motorcycle['meta'] = json_decode($motorcycle['meta'], true);
            $check_exiting = Motorcycle::where('make', $motorcycle['make'])
                ->where('model', $motorcycle['model'])
                ->where('year', $motorcycle['year'])
                ->first();
            if (!$check_exiting) {
                (new Motorcycle())->create($motorcycle);
            }
        }
    }
}
