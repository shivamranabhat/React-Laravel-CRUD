<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::latest()->get();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'name'=>'required',
            'email'=>['required','email',Rule::unique('users','email')],
            'password'=>'required',
        ]);
         //To make Hash Password
         $formFields['password'] = Hash::make($request->password);
         //create user
         $user = User::create($formFields);
         return response()->json('Account created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::whereId($id)->first();
        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::whereId($id)->first();
        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::whereId($id)->first();
        $formFields = $request->validate([
            'name'=>'required',
            'email'=>'required',
        ]);
         //To make Hash Password
         $formFields['password'] = Hash::make($request->password);
         //create user
         $user->update($formFields);
         return response()->json('Account updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::whereId($id)->first();
        $user->delete();
        return response()->json('Account deleted successfully');
    }
}
