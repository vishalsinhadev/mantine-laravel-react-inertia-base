<?php

namespace App\Http\Controllers;

use App\Http\Resources\JobPostResources;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\Portfolio\PortfolioService;
use App\Http\Resources\PortfolioResources;
use App\Models\JobPost;

class SiteController extends Controller
{
    protected $portfolio;
    public function __construct(PortfolioService $portfolio)
    {
        $this->portfolio = $portfolio;
    }
    public function index()
    {
        return Inertia::render('Home/Index')->withViewData([
            'title' => 'We provide service in Web and Mobile App Development',
            'description' => 'We provide service in Web, Mobile App Development, SEO, Designing'
        ]);
    }

    public function service()
    {
        return Inertia::render('Service/Index')->withViewData([
            'title' => 'Service',
            'description' => 'We provide service in Web, Mobile App Development, SEO, Designing'
        ]);
    }

    public function portfolio()
    {
        $lists = PortfolioResources::collection($this->portfolio->lists());
        return Inertia::render('Portfolio/Index', compact('lists'))->withViewData([
            'title' => 'Portfolio'
        ]);
    }

    public function career()
    {
        $models = JobPost::where([
            'state_id' => 1
        ])->get();
        $lists = JobPostResources::collection($models);
        return Inertia::render('Career/Index', compact('lists'))->withViewData([
            'title' => 'Career'
        ]);
    }

    public function careerStore(Request $request, $id)
    {
        $models = JobPost::where([
            'id' => $id
        ])->first();
        $lists = JobPostResources::collection($models);
        return Inertia::render('Career/Index', compact('lists'))->withViewData([
            'title' => 'Career'
        ]);
    }

    public function contactUs()
    {
        return Inertia::render('ContactUs/Index')->withViewData([
            'title' => 'Contact Us'
        ]);
    }
    public function about()
    {
        return Inertia::render('About/Index')->withViewData([
            'title' => 'About Us'
        ]);
    }
}
