<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    protected $fillable = ['title', 'description', 'slug', 'supervisor_id', 'submitted_at', 'fileUrl', 'members', 'status', 'student_id'];

    public function getMembers($members)
    {
        $users = User::where('is_student', true)->get();
        $members = $users->whereIn('id', $members);
        $studentsData = [];

        foreach ($members as $member) {
            $studentsData[] = [
                'id' => $member->id,
                'name' => $member->name,
                'email' => $member->email,
            ];
        }
        return $studentsData;
    }

    public function supervisor()
    {
        return $this->belongsTo(User::class, 'supervisor_id', 'id');
    }

    public function submitter()
    {
        return $this->belongsTo(User::class, 'student_id', 'id');
    }

    public function comments()
    {
        return $this->hasMany(ProposalComment::class, "proposal_id", "id");
    }

    protected $casts = [
        'members' => 'array',
        'submitted_at' => 'datetime',
    ];
}
