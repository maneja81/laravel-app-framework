<?php

namespace App\Models;

use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductBrand extends Model
{
    use HasFactory;
    use ModelHelpers;

    protected $fillable = [
        'name',
        'slug',
        'image',
        'website',
        'meta',
    ];

    protected $casts = [
        'meta' => 'array',
    ];

    public function create($data)
    {
        $data['slug'] = helpers()->strToSlug($data['name']);
        $brand = parent::create($data);

        return $brand;
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function vendors()
    {
        return $this->hasMany(ProductVendor::class);
    }
}
