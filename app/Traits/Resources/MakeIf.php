<?php

namespace App\Traits\Resources;

trait MakeIf
{
    public static function makeIf(mixed $condition, $object = null): mixed
    {
        if (is_object($condition)) {
            return self::make($condition);
        }

        return $condition ? self::make($object) : null;
    }
}
