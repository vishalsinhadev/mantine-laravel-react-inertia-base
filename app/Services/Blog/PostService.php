<?php
namespace App\Services\Blog;

use App\Models\Post;

class PostService
{

    public function postList($offset = 0, $query = null, $category)
    {
        $model = Post::select([
            'posts.id',
            'posts.category_id',
            'posts.title',
            'posts.description',
            'posts.slug',
            'posts.content',
            'posts.html_content',
            'posts.state_id',
            'posts.view_count',
            'posts.published_at',
            'posts.created_by_id',
            'posts.created_at'
        ])->search($query)->join('categories', 'categories.id', '=', 'posts.category_id');
        if ($category != null) {
            $model = $model->where([
                'categories.name' => $category
            ]);
        }

        $model = $model->orderBy('posts.created_at','DESC')
            ->take(20)
            ->skip($offset)
            ->paginate();
        return $model;
    }

    public function getDataBySlug($slug)
    {
        return Post::whereSlug($slug)->first();
    }
}