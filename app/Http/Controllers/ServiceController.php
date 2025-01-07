<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        return Inertia::render('Service/Index')->withViewData([
            'title' => 'Service',
            'description' => 'We provide service in Web, Mobile App Development, SEO, Designing'
        ]);
    }

    public function view($slug)
    {
        $model = Service::where([
            'slug' => $slug
        ])->first();
        return Inertia::render('Service/View', compact('model'));
    }
}
