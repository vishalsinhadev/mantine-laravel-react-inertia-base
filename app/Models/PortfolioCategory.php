<?php

/**
 * @author	 : Vishal Kumar Sinha <vishalsinhadev@gmail.com>
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortfolioCategory extends Model
{
    protected $fillable = [
        'title',
        'state_id',
        'created_by_id'
    ];
}
