<?php

namespace App\Support\Helpers\Traits;

use App\Models\Motorcycle;

trait SeedHelpers
{
    public function seedMotorcycles($brand, $offset = 0)
    {
        $duplicates = (new Motorcycle())->getDuplicates();
        if (count($duplicates) > 0) {
            return;
        }
        $motorcycles = $this->apiCall('GET', "https://api.api-ninjas.com/v1/motorcycles?make={$brand}&offset={$offset}", [
            'offset' => $offset
        ], [
            'X-Api-Key' => env('API_NINJA_KEY')
        ]);
        if (count($motorcycles) === 0) {
            return;
        }
        foreach ($motorcycles as $motorcycle) {
            $motorcycle = json_decode(json_encode($motorcycle), true);
            (new Motorcycle())->create($motorcycle);
        }
        $this->seedMotorcycles($brand, $offset + count($motorcycles));
    }
}
