<?php

namespace App\Models;

use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductTag extends Model
{
    use HasFactory;
    use ModelHelpers;

    protected $fillable = [
        'name',
        'slug',
        'description',
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
        return $this->belongsToMany(Product::class);
    }

    public function scopePublished()
    {
        return $this->where('status', 'published');
    }

    public function scopeDraft()
    {
        return $this->where('status', 'draft');
    }

    public function scopeSearch($query, $search)
    {
        return $query->where('name', 'like', '%'.$search.'%')
            ->orWhere('description', 'like', '%'.$search.'%');
    }

    public function scopeSort($query, $sort)
    {
        if ($sort === 'oldest') {
            return $query->orderBy('created_at', 'asc');
        }

        return $query->orderBy('created_at', 'desc');
    }

    public function scopeFilter($query, $filters)
    {
        if (isset($filters['status']) && $filters['status'] !== 'all') {
            $query->where('status', $filters['status']);
        }

        if (isset($filters['sort']) && $filters['sort'] !== 'latest') {
            $query->sort($filters['sort']);
        }

        if (isset($filters['search']) && $filters['search'] !== '') {
            $query->search($filters['search']);
        }
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
