<?php

namespace App\Http\Controllers;

use App\Http\Resources\SupervisorResource;
use App\Models\User;
use Illuminate\Http\Request;

class SupervisorController extends Controller
{
    public function index()
    {
        $supervisors = User::whereIn('id', function ($query) {
            $query->select('supervisor_id')->from('projects');
        })->get();

        return SupervisorResource::collection($supervisors);
    }

    public function show(string $id)
    {
        //
    }
}
