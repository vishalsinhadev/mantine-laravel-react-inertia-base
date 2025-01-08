<?php
namespace App\Services\Contact;

use App\Models\ContactUS;

/**
 *
 * @author Sinha
 *        
 */
class ContactService
{

    protected $model;

    public function __construct(ContactUS $model)
    {
        $this->model = $model;
    }

    /**
     *
     * @param number $offset
     * @param string $query
     * @return object
     */
    public function store($request)
    {
        return ContactUS::create($request->only([
            'name',
            'subject',
            'email',
            'message'
        ]));
    }
}

