<?php

namespace App\Models;

use App\Models\Address;
use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable');
    }
}
