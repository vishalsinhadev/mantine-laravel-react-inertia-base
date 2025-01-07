<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Helper\FileHelper;

class Portfolio extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'link',
        'image',
        'full_image',
        'state_id',
        'created_by_id',
        'portfolio_category_id'
    ];

    const STATE_PENDING = 0;

    const STATE_ACTIVE = 1;

    public static function boot()
    {
        parent::boot();
    }
    public function category()
    {
        return $this->belongsTo(PortfolioCategory::class, 'portfolio_category_id', 'id');
    }
    public function getImageUrl()
    {
        return FileHelper::getFile($this->full_image);
    }
    //
}
