<?php

namespace App\Models;

use App\Models\ProductCategory;
use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    use ModelHelpers;

    protected $fillable = [
        'name',
        'slug',
        'excerpt',
        'content',
        'status',
        'meta',
    ];

    protected $casts = [
        'meta' => 'array',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    public function scopeScheduled($query)
    {
        return $query->where('status', 'scheduled');
    }

    public function scopeSearch($query, $search)
    {
        return $query->where('name', 'like', '%' . $search . '%')
            ->orWhere('content', 'like', '%' . $search . '%');
    }

    public function scopeSort($query, $sort)
    {
        return $query->orderBy($sort['by'], $sort['order']);
    }

    public function scopeFilter($query, $filters)
    {
        foreach ($filters as $filter => $value) {
            if ($filter === 'search') {
                $query->search($value);
            } elseif ($filter === 'sort') {
                $query->sort($value);
            } else {
                $query->where($filter, $value);
            }
        }
    }

    public function scopePaginate($query, $paginate)
    {
        return $query->paginate($paginate);
    }

    public function variants()
    {
        return $this->hasMany(ProductVariant::class);
    }

    public function category()
    {
        return $this->belongsTo(ProductCategory::class);
    }

    public function brand()
    {
        return $this->belongsTo(ProductBrand::class);
    }

    public function collections()
    {
        return $this->belongsToMany(ProductCollection::class);
    }

    public function vendors()
    {
        return $this->belongsToMany(ProductVendor::class);
    }
}
