<?php

/**
 * @author	 : Vishal Kumar Sinha <vishalsinhadev@gmail.com>
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Traits\SearchableTrait;

class Post extends Model
{
    use SearchableTrait;

    const STATE_DRAFT = 0;

    const STATE_PUBLISHED = 1;

    const STATE_REVIEW = 2;

    const STATE_REMOVED = 3;

    /**
     *
     * @return string[]
     */
    public static function getStateLists()
    {
        return [
            self::STATE_DRAFT => 'Pending',
            self::STATE_PUBLISHED => 'Published',
            self::STATE_REVIEW => 'Review',
            self::STATE_REMOVED => 'Removed'
        ];
    }

    /**
     *
     * @return string
     */
    public function getState()
    {
        return array_key_exists($this->state_id, self::getStateLists()) ? self::getStateLists()[$this->state_id] : 'Not Defined';
    }

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (auth()->user() != null) {
                $model->created_by_id = auth()->user()->id;
                $model->state_id = self::STATE_PUBLISHED;
            }
        });
        static::saving(function ($model) {
            $model->slug = str_slug($model->title);
        });
    }

    protected $dates = [
        'deleted_at',
        'published_at'
    ];

    protected $fillable = [
        'category_id',
        'title',
        'description',
        'slug',
        'content',
        'html_content',
        'state_id',
        'view_count',
        'published_at',
        'created_by_id'
    ];

    protected $searchable = [
        'columns' => [
            'users.username' => 10,
            'users.first_name' => 10,
            'users.last_name' => 10
        ],
        'joins' => [
            'users' => [
                'users.id',
                'users_blocklist.blocked_id'
            ]
        ]
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'created_by_id', 'id');
    }

    public function isPublished()
    {
        return $this->state_id == 1;
    }
    public function showMoreLink()
    {
        //return 'Show More';

        return '<a href=' . route('blog.guest-view', ['slug' => $this->slug]) . ' className=show-more> Show More </a>';
    }
}
