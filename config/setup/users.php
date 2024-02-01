<?php

return [
    [
        'first_name' => 'Super',
        'last_name' => 'Admin',
        'mobile' => '+919876543210',
        'mobile_verified' => true,
        'email' => 'super-admin@example.com',
        'password' => env('SUPER_ADMIN_PASSWORD', '#StrongPassword1029$'),
        'role' => 'super-admin',
    ],
    [
        'first_name' => 'Admin',
        'last_name' => 'Account',
        'mobile' => '+919876543210',
        'mobile_verified' => true,
        'email' => 'admin@example.com',
        'password' => env('SUPER_ADMIN_PASSWORD', '#StrongPassword1029$'),
        'role' => 'admin',
    ],
    [
        'first_name' => 'Staff',
        'last_name' => 'Account',
        'mobile' => '+919876543210',
        'mobile_verified' => true,
        'email' => 'staff@example.com',
        'password' => env('SUPER_ADMIN_PASSWORD', '#StrongPassword1029$'),
        'role' => 'staff',
    ],
];
