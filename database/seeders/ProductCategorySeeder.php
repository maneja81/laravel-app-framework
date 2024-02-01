<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = config('setup.categories');
        foreach ($categories as $item) {
            $category = (new ProductCategory())->getByField('name', $item['name']);
            if (!$category) {
                (new ProductCategory)->create($item);
            }
        }
    }
}
