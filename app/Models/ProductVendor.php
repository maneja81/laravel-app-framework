<?php

namespace App\Models;

use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductVendor extends Model
{
    use HasFactory;
    use ModelHelpers;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'website',
        'address',
    ];

    protected $casts = [
        'meta' => 'array',
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
