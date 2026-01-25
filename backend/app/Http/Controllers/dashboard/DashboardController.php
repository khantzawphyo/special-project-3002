<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Proposal;
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
            return "Student Affairs Role - Reviewing administrative details";
        }

        if ($user->hasRole('Supervisor')) {
            return "Supervisor Role - Mentoring and grading active projects";
        }

        if ($user->hasRole('Student')) {
            return $this->getStudentDashboardData();
        }

        return "No specific role assigned";
    }

    private function getICDashboardData()
    {
        $noOfProposals = Proposal::all()->count();
        $noOfProjects = Project::all()->count();
        $noOfSupervisors = Project::distinct('supervisor_id')->count('supervisor_id');

        return response()->json(
            [
                'noOfProposals' => $noOfProposals,
                'noOfProjects' => $noOfProjects,
                'noOfSupervisors' => $noOfSupervisors,
                'noOfTeams' => 0
            ]
        );
    }

    private function getStudentDashboardData()
    {
        return "Student Role - Managing my proposal and team";
    }
}
