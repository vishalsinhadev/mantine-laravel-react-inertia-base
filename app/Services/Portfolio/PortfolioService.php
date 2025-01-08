<?php
namespace App\Services\Portfolio;

use App\Models\Portfolio;

/**
 *
 * @author Sinha
 *        
 */
class PortfolioService
{

    protected $model;

    public function __construct(Portfolio $model)
    {
        $this->model = $model;
    }

    /**
     *
     * @param number $offset
     * @param string $query
     * @return object
     */
    public function lists($offset = 0, $query = null)
    {
        return $this->model::where($query)->skip($offset)->paginate(20);
    }

    /**
     *
     * @param integer $id
     * @return object
     */
    public function getData($id)
    {
        return $this->model::whereId($id)->first();
    }
}

