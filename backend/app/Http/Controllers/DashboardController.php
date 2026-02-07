<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Proposal;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if ($user->hasRole('IC')) {
            return $this->getICDashboardData();
        }

        if ($user->hasRole('Student Affairs')) {
            return $this->getStudentAffairsDashboardData();
        }

        if ($user->hasRole('Supervisor') || $user->hasRole('Faculty')) {
            return $this->getFacultyDashboardData();
        }

        if ($user->hasRole('Student')) {
            return $this->getStudentDashboardData();
        }
    }

    private function getICDashboardData()
    {
        $noOfProposals = Proposal::all()->count();
        $noOfProjects = Project::all()->count();
        $noOfSupervisors = Project::distinct('supervisor_id')->count('supervisor_id');
        $noOfFaculties = User::where('is_student', false)
            ->whereDoesntHave('roles', function ($query) {
                $query->where('name', 'Student Affairs');
            })
            ->count();

        return response()->json(
            [
                'noOfProposals' => $noOfProposals,
                'noOfProjects' => $noOfProjects,
                'noOfSupervisors' => $noOfSupervisors,
                'noOfFaculties' => $noOfFaculties
            ]
        );
    }

    private function getFacultyDashboardData()
    {
        return "Hit";
    }

    private function getStudentAffairsDashboardData()
    {
        return "Student Role - Managing my proposal and team";
    }

    private function getStudentDashboardData()
    {
        return "Student Role - Managing my proposal and team";
    }
}
