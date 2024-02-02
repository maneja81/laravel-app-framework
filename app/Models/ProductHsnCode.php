<?php

namespace App\Models;

use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Model;

class ProductHsnCode extends Model
{
    use ModelHelpers;

    protected $fillable = [
        'code',
        'tax_percentage',
    ];

    public function products()
    {
        return $this->hasMany(ProductVariant::class);
    }
}
