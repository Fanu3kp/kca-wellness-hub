<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', User::class);
        $query = User::query()->with(['roles', 'profile:id,user_id,campus_id,student_number']);

        if ($request->filled('search')) {
            $query->where('name', 'like', '%'.$request->string('search').'%')
                ->orWhere('email', 'like', '%'.$request->string('search').'%');
        }

        if ($request->filled('role')) {
            $query->whereHas('roles', static function ($query) use ($request): void {
                $query->where('name', $request->string('role'));
            });
        }

        return response()->json(['data' => $query->orderBy('name')->paginate(20)]);
    }

    public function peerCounselors(Request $request): JsonResponse
    {
        $user = $request->user();

        $query = User::query()
            ->where('is_active', true)
            ->whereHas('roles', static function ($query): void {
                $query->where('name', 'peer_counselor');
            })
            ->with(['profile:id,user_id,campus_id', 'roles:id,name']);

        if (! $user->hasRole('admin')) {
            $campusId = $user->profile?->campus_id ?? $user->profile?->campus_id;
            if ($campusId) {
                $query->whereHas('profile', static function ($query) use ($campusId): void {
                    $query->where('campus_id', $campusId);
                });
            }
        }

        if ($request->filled('campus_id')) {
            $query->whereHas('profile', static function ($query) use ($request): void {
                $query->where('campus_id', $request->integer('campus_id'));
            });
        }

        return response()->json(['data' => $query->orderBy('name')->get()]);
    }

    public function show(User $user): JsonResponse
    {
        $this->authorize('view', $user);

        return $this->json([
            'user' => $this->userPayload($user),
            'profile' => $user->profile,
            'roles' => $user->roles,
        ]);
    }

    public function update(Request $request, User $user): JsonResponse
    {
        $this->authorize('update', $user);
        $payload = $request->validate([
            'name' => ['sometimes', 'string', 'max:255'],
            'email' => ['sometimes', 'email', 'max:255', Rule::unique('users', 'email')->ignore($user->id)],
            'password' => ['sometimes', 'nullable', 'string', 'min:8'],
            'is_active' => ['sometimes', 'boolean'],
            'roles' => ['sometimes', 'array'],
            'roles.*' => ['string', 'exists:roles,name'],
        ]);

        if (array_key_exists('password', $payload)) {
            $payload['password'] = Hash::make($payload['password']);
        }

        abort_if(
            $user->id === $request->user()->id && array_key_exists('is_active', $payload) && ! $payload['is_active'],
            422,
            'You cannot deactivate your own account.'
        );

        $roles = array_key_exists('roles', $payload)
            ? Role::whereIn('name', $payload['roles'])->pluck('id')->all()
            : null;
        unset($payload['roles']);

        $user->update($payload);
        if ($roles !== null) {
            $user->roles()->sync($roles);
        }
        $this->audit('user.updated', User::class, $user->id, ['roles' => $user->roles()->pluck('name')->all()]);

        return $this->json([
            'user' => $this->userPayload($user),
            'profile' => $user->profile,
            'roles' => $user->roles,
        ]);
    }

    public function destroy(User $user): JsonResponse
    {
        $this->authorize('delete', $user);
        abort_if($user->id === request()->user()->id, 422, 'You cannot delete your own account.');
        $user->delete();
        $this->audit('user.deleted', User::class, $user->id);

        return $this->message('User deleted.');
    }
}
