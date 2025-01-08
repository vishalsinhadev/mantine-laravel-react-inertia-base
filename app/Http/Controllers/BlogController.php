<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\Blog\PostService;
use App\Models\Category;
use App\Models\Post;
use App\Http\Resources\BlogResources;

class BlogController extends Controller
{
    protected $service;
    public function __construct(PostService $service)
    {
        $this->service = $service;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function blog($category = null)
    {
        $posts = BlogResources::collection($this->service->postList(0, null, $category));
        $categories = Category::take(10)->get();
        $randomPosts = BlogResources::collection(Post::inRandomOrder()->take(10)->get());
        return Inertia::render('Blog/Index', compact('posts', 'categories', 'randomPosts'))->withViewData([
            'title' => 'Blogs'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function view($slug, $id)
    {
        $post = new BlogResources($this->service->getDataBySlug($slug));
        return Inertia::render('Blog/View', compact('post'))->withViewData([
            'title' => $post->title
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
