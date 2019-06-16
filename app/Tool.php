<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{

    protected $fillable = ['title', 'link', 'description'];

    public function tags()
    {
        return $this->hasMany('App\Tag');
    }
}
