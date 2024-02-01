<?php

namespace App\Models;

use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductVariant extends Model
{
    use HasFactory;
    use ModelHelpers;

    protected $fillable = [
        'product_id',
        'sku',
        'name',
        'image',
        'stock',
        'cost',
        'price',
        'compare_price',
        'weight',
        'status',
        'is_default',
        'barcode',
        'meta',
    ];

    protected $casts = [
        'meta' => 'array',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function scopeSort($query, $sort)
    {
        return $query->orderBy($sort['by'], $sort['order']);
    }

    public function scopeSearch($query, $search)
    {
        return $query->where('name', 'like', '%'.$search.'%');
    }
}
