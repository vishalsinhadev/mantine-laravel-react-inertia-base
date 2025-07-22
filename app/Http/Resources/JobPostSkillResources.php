<?php

/**
 * @author : Vishal Kumar Sinha <vishalsinhadev@gmail.com>
 */

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class JobPostSkillResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'skill' => $this->skill->title
        ];
    }
}
