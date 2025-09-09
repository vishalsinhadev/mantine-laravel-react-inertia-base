<?php

/**
 * @author : Vishal Kumar Sinha <vishalsinhadev@gmail.com>
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Import extends Model
{
    protected $fillable = ['file_path', 'status', 'total_rows', 'processed_rows'];

    protected $appends = ['file_url'];

    public function getFileUrlAttribute()
    {
        return Storage::url($this->file_path);
    }
}
