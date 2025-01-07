<?php

/**
 * @author	 : Vishal Kumar Sinha <vishalsinhadev@gmail.com>
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobPostApplication extends Model
{
    protected $fillable = [
        'job_post_id',
        'full_name',
        'email',
        'phone',
        'cv_file',
        'experience'
    ];
    public function jobPost()
    {
        return $this->belongsTo(JobPostSkill::class, 'job_post_id', 'id');
    }
}
