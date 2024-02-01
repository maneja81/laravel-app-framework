<?php

namespace Database\Seeders;

use App\Models\ProductBrand;
use Illuminate\Database\Seeder;

class ProductBrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = config('setup.brands');
        foreach ($brands as $item) {
            $brand = (new ProductBrand())->getByField('name', $item['name']);
            if (!$brand) {
                (new ProductBrand)->create($item);
            }
        }
    }
}
