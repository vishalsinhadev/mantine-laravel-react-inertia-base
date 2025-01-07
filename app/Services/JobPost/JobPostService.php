<?php

namespace App\Services\JobPost;

use App\Helper\FileHelper;
use App\Models\JobPost;
use App\Models\JobPostApplication;

/**
 *
 * @author Sinha
 *        
 */
class JobPostService
{

    protected $model;

    public function __construct(JobPost $model)
    {
        $this->model = $model;
    }

    /**
     *
     * @param number $offset
     * @param string $query
     * @return object
     */
    public function storeApplication($request, $id)
    {
        $fileName = FileHelper::handleUploadFile($request->file('cv'));
        $request->merge([
            'cv_file' => $fileName,
            'job_post_id' => $id
        ]);
        return JobPostApplication::create($request->only([
            'full_name',
            'cv_file',
            'email',
            'experience',
            'job_post_id',
            'phone'
        ]));
    }
}
