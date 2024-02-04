<?php

namespace App\Models;

use App\Models\Product;
use App\Models\MotorcycleProduct;
use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Model;

class Motorcycle extends Model
{

    use ModelHelpers;

    protected $fillable = [
        'make',
        'model',
        'year',
        'type',
        'meta'
    ];

    protected $casts = [
        'meta' => 'array'
    ];

    public function create(array $data)
    {
        $motorcycle = parent::create($data);
        $motorcycle->updateInfo($data);
        return $motorcycle;
    }

    public function getDisplayNameAttribute(){
        return "{$this->make} {$this->model} ({$this->year})";
    }

    public function products(){
        return $this->belongsToMany(Product::class);
    }


    public function getDuplicates()
    {
        return $this->select('make', 'model', 'year')
            ->groupBy('make', 'model', 'year')
            ->havingRaw('count(*) > 1')
            ->get();
    }

    public function deleteDuplicates()
    {
        $duplicates = $this->getDuplicates();
        foreach ($duplicates as $duplicate) {
            $this->where('make', $duplicate->make)
                ->where('model', $duplicate->model)
                ->where('year', $duplicate->year)
                ->orderBy('id', 'desc')
                ->skip(1)
                ->delete();
        }
    }
}
