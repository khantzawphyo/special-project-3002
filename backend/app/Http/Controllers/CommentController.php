<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;
use App\Models\Proposal;
use App\Models\ProposalComment;

class CommentController extends Controller
{
    public function store(CommentRequest $request)
    {
        try {
            ProposalComment::create($request->all());
            return response()->json(['message' => 'Comment added successfully'], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to add comment',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show(Proposal $projectProposal)
    {
        try {
            $comments = $projectProposal->comments()->with('author')->latest()->get();
            return CommentResource::collection($comments);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to retrieve comments',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function update(Proposal $projectProposal)
    {
        try {
            $comments = $projectProposal->comments()->with('author')->latest()->get();
            return CommentResource::collection($comments);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to retrieve comments',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy(ProposalComment $proposalComment)
    {
        try {
            $proposalComment->delete();
            return response()->json(['message' => 'Comment deleted successfully'], 204);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to delete comment',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
