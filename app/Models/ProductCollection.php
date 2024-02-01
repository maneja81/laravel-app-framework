<?php

namespace App\Models;

use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCollection extends Model
{
    use HasFactory;
    use ModelHelpers;

    protected $fillable = [
        'name',
        'slug',
        'image',
        'sort_order',
        'status',
        'meta',
    ];

    protected $casts = [
        'meta' => 'array',
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function scopePublished()
    {
        return $this->where('status', 'published');
    }

    public function scopeDraft()
    {
        return $this->where('status', 'draft');
    }
}
