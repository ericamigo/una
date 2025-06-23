<?php

namespace App\Traits;

trait HasUlid
{
    public static function bootHasUlid(): void
    {
        static::creating(function ($model) {
            $model->ulid = strtolower(Str::ulid());
        });
    }

    public function getRouteKeyName(): string
    {
        return 'ulid';
    }
}
