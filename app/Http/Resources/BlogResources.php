<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResources extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'html_content' => $this->html_content,
            'created_at' => $this->created_at->diffForHumans(),
            'created_by' => $this->user->name ?? '',
            'slug'=> $this->slug,
            'category' => $this->category->name
        ];
    }
}
