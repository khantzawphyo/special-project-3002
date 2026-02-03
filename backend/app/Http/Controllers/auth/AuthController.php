<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\auth\LoginRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Lang;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function updateProfile(Request $request)
    {
        $data = $request->validate([
            'phoneNo' => 'required|string|max:20',
            'address' => 'required|string|max:255',
        ]);

        $user = Auth::user();

        // Check user roles
        if ($user->hasRole('Faculty') || $user->hasRole('IC') || $user->hasRole('Supervisor') || $user->hasRole("Student Affairs")) {
            // Update faculty info
            $faculty = $user->faculty;

            if ($faculty) {
                $faculty->update([
                    'phone_number' => $data["phoneNo"],
                    'address' => $data["address"],
                ]);
            }
        } else {
            // Update student info
            $student = $user->student;

            if ($student) {
                $student->update([
                    'phone_number' => $data['phoneNo'],
                    'address' => $data['address'],
                ]);
            }
        }

        return response()->json([
            'user' => new UserResource(Auth::user()->load(['student', 'faculty'])),
            'token' => $request->bearerToken()
        ], 200);
    }

    public function login(LoginRequest $request)
    {
        if (Auth::attempt($request->validated())) {
            $token = Auth::user()->createToken('authToken')->plainTextToken;
            return response()->json([
                'user' => new UserResource(Auth::user()->load(['student', 'faculty'])),
                'token' => $token
            ], 200);
        } else {
            throw ValidationException::withMessages([
                'email' => [Lang::get('auth.failed')],
            ]);
        }
    }

    public function logout()
    {
        Auth::user()->currentAccessToken()->delete();

        return response()->json([
            'message' => "Logout Successfully"
        ]);
    }
}
