<?php

namespace App\Models;

use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;
    use ModelHelpers;

    protected $fillable = [
        'name',
        'slug',
        'image',
        'meta',
    ];

    protected $casts = [
        'meta' => 'array',
    ];

    public function create($data){
        $data['slug'] = helpers()->strToSlug($data['name']);
        $category = parent::create($data);
        return $category;
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function scopeSort($query, $sort)
    {
        return $query->orderBy($sort['by'], $sort['order']);
    }

    public function scopeFilter($query, $filters)
    {
        return $query->where('name', 'like', '%' . $filters['search'] . '%');
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }



}