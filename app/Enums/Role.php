<?php

namespace App\Enums;

use Illuminate\Contracts\Support\Arrayable;

enum Role: string implements Arrayable
{
    case Admin = 'admin';
    case User = 'user';

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'value' => $this->value,
        ];
    }
}
