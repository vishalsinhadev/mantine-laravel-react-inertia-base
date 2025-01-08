<?php

/**
 * @author	 : Vishal Kumar Sinha <vishalsinhadev@gmail.com>
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobPost extends Model
{
    const TYPE_REMOTE = 1;
    const TYPE_OFFICE_LOCATION = 2;

    protected $fillable = [
        'title',
        'description',
        'type_id',
        'state_id'
    ];
    public function jobPostSkills()
    {
        return $this->hasMany(JobPostSkill::class, 'job_post_id', 'id');
    }
    public function type()
    {
        $types = [
            self::TYPE_REMOTE => "Remote",
            self::TYPE_OFFICE_LOCATION => "Office Location"
        ];
        return array_key_exists($this->type_id, $types) ? $types[$this->type_id] : "Not Defined";
    }
}
