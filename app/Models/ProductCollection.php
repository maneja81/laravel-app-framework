<?php

namespace App\Models;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductCollection extends Model
{
    use HasSlug;
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

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

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
}
