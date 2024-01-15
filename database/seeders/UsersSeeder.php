<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = config('setup.users');
        foreach ($users as $user) {
            $user_exists = (new \App\Models\User())->where('email', $user['email'])->first();
            if (!$user_exists) {
                $new_user = (new \App\Models\User())->create([
                    'first_name' => $user['first_name'],
                    'last_name' => $user['last_name'],
                    'email' => $user['email'],
                    'email_verified_at' => Carbon::now(),
                    'password' => bcrypt($user['password']),
                ]);
                $new_user->assignRole($user['role']);
            }
        }
    }
}
