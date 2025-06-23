<?php

namespace App\Http\Resources;

use App\Models\User;
use App\Traits\Resources\MakeIf;
use App\Traits\Resources\Unwrappable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin User
 */
class UserResource extends JsonResource
{
    use MakeIf;
    use Unwrappable;

    public static $wrap = null;

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->ulid,
            'name' => $this->name,
            'role' => EnumResource::make($this->role),
            'email' => $this->email,
        ];
    }
}
