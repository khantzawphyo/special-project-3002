<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects =  Project::with(['leader', 'supervisor', 'members'])->get();
        return ProjectResource::collection($projects);
    }

    public function show(Project $project)
    {
        return $project;
    }
}
