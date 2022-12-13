<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'pseudo' => 'required|max:100',
            'email' => 'required|email|max:191|unique:users,email',
            'password' => 'required|min:8'
        ]);
        // return response()->json("test test");
        
        if($validator->fails()) {

            return response()->json([
                'error' => $validator->messages(),
                'status' => 422
            ]);

        } else {
            $user = User::create([
                'pseudo' => $request->pseudo,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

            $token = $user->createToken($request->email.'_Token')->plainTextToken;

            return response()->json([
                'status' => 200,
                'token' => $token,
                'message' => 'User creer avec succes'
            ]);
        }
    }
    public function login(Request $request){

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        if($validator->fails()) {

            return response()->json([
                'error' => $validator->messages(),
                'status' => 422
            ]);

        } else {

            $user = User::where('email', $request->email)->first();

            if (! $user || ! Hash::check($request->password, $user->password)) {

                return response()->json([
                    'message' => 'Vos identifiants sont incorrect',
                    'status' => 401
                    ]);
            } else {

                // 1 = admin
                if($user->roles_as === 1) {

                    $role = "admin";
                    $token = $user->createToken($request->email.'_AdminToken', ['server:admin'])->plainTextToken;

                } else {
                    $role = "user";
                    $token = $user->createToken($request->email.'_Token', [''])->plainTextToken;
                }

                return response()->json([
                    'status' => 200,
                    'token' => $token,
                    'name' => $user->pseudo,
                    'role'=> $role,
                    'message' => 'connexion reussi avec succes'
                ]);
            }
        }
    }
    public function logout() {

        auth()->user()->tokens()->delete();

        return response()->json([
            'status' => 200,
            'message' => 'deconnexion reussie'
        ]);
    }
}