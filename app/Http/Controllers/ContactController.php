<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactUsRequest;
use Inertia\Inertia;
use App\Services\Contact\ContactService;
use Illuminate\Support\Facades\Redirect;

class ContactController extends Controller
{
    protected $contact;
    public function __construct(ContactService $contact)
    {
        $this->contact = $contact;
    }
    public function store(ContactUsRequest $request)
    {
        $this->contact->store($request);
        return Redirect::route('site.contact-us')->with('success', 'Thank you, We will contact you as soon as possible.');
    }
}
