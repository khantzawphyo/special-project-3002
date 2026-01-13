<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProposalRequest;
use App\Http\Resources\ProposalResource;
use App\Models\Proposal;
use Illuminate\Support\Facades\Auth;

class ProposalController extends Controller
{
    public function index()
    {
        try {
            $proposals = Proposal::with(['supervisor', 'submitter'])->get();
            return ProposalResource::collection($proposals);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to retrieve proposals',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function store(ProposalRequest $request)
    {
        try {
            Proposal::create($request->all());
            return response()->json([
                'message' => 'Proposal created successfully'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to create proposal',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show()
    {
        $proposal = Proposal::where("submitted_by", Auth::id())
            ->first();

        if (!$proposal) {
            return response()->json([
                'message' => 'Proposal not found'
            ], 404);
        }

        return new ProposalResource($proposal->load(['supervisor', 'submitter']));
    }

    public function approveByIc(Proposal $projectProposal)
    {
        $projectProposal->update([
            'status' => 'approved'
        ]);

        return $projectProposal;
    }

    public function rejectByIc(Proposal $projectProposal)
    {
        $projectProposal->update([
            'status' => 'rejected'
        ]);

        return $projectProposal;
    }

    public function detail(Proposal $projectProposal)
    {
        try {
            $proposal = $projectProposal->load(['supervisor', 'submitter']);
            return new ProposalResource($proposal);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to retrieve proposal details',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy(Proposal $projectProposal)
    {
        try {
            $projectProposal->delete();
            return response()->json([
                'message' => 'Proposal deleted successfully'
            ], 204);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to delete proposal',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
