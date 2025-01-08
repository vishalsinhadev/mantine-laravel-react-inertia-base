<?php

namespace App\Http\Controllers;

use App\Http\Requests\JobPostApplicationRequest;
use App\Services\JobPost\JobPostService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class JobPostController extends Controller
{
    protected $contact;
    public function __construct(JobPostService $contact)
    {
        $this->contact = $contact;
    }
    public function storeApplication(Request $request, $id)
    {
        $this->contact->storeApplication($request, $id);
        return Redirect::route('site.career')->with('success', 'Thank you, We will contact you as soon as possible.');
    }
}
