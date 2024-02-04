<?php

namespace App\Models;

use Spatie\Sluggable\HasSlug;
use Spatie\MediaLibrary\HasMedia;
use Spatie\Sluggable\SlugOptions;
use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Product extends Model implements HasMedia
{
    use HasFactory;
    use HasSlug;
    use ModelHelpers;
    use InteractsWithMedia;

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

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(256)
            ->height(256);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('featured')->singleFile();
        $this->addMediaCollection('gallery');
    }

    public function getFeaturedImageAttribute()
    {
        return $this->getMedia('featured')->first();
    }

    public function getGalleryAttribute()
    {
        return $this->getMedia('gallery');
    }

    public function create($data)
    {
        $product = parent::create($data);

        return $product;
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

    public function categories()
    {
        return $this->belongsToMany(ProductCategory::class);
    }

    public function tags()
    {
        return $this->belongsToMany(ProductTag::class);
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

    public function motorcycles()
    {
        return $this->belongsToMany(Motorcycle::class);
    }
}
