<?php

/**
 * @author	 : Vishal Kumar Sinha <vishalsinhadev@gmail.com>
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    const TYPE_MAIN = 0;
    const TYPE_TECHNOLOGY = 1;
    const TYPE_HIRE = 2;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'image',
        'type_id',
        'state_id'
    ];
}
