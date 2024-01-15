<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = config('setup.roles.all');
        foreach ($roles as $role) {
            if (!\Spatie\Permission\Models\Role::where(['name' => $role, 'guard_name' => 'web'])->exists()) {
                \Spatie\Permission\Models\Role::create([
                    'name' => $role,
                ]);
            }
        }
    }
}
