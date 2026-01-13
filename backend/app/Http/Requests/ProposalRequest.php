<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class ProposalRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|min:10|max:100',
            'description' => 'required|min:10|max:300',
            'fileUrl' => 'required',
            'members' => 'required',
            'submitted_by' => 'required|exists:users,id',
            'supervisor_id' => 'required|exists:users,id'
        ];
    }

    /**
     * Handle a passed validation attempt.
     */
    protected function passedValidation(): void
    {
        $this->merge([
            'slug' => Str::slug($this->title, '-'),
            'status' => 'pending',
            'submitted_at' => now()
        ]);
    }
}
