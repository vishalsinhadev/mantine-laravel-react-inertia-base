<?php

/**
 * @author	 : Vishal Kumar Sinha <vishalsinhadev@gmail.com>
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobPostSkill extends Model
{
    protected $fillable = [
        'job_post_id',
        'skill_id'
    ];
    public function skill()
    {
        return $this->belongsTo(Skill::class, 'skill_id', 'id');
    }
}
