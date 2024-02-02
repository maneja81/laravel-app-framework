<?php

namespace App\Models;

use App\Support\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    use ModelHelpers;

    protected $fillable = [
        'addressable_type',
        'addressable_id',
        'address_line_1',
        'address_line_2',
        'city',
        'state',
        'postal_code',
        'country',
        'type',
        'is_primary',
        'meta',
    ];

    protected $casts = [
        'meta' => 'array',
    ];

    public function parent()
    {
        return $this->morphTo('addressable');
    }
}
