<?php

namespace App\Http\Controllers\API;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index(){

        $category = Category::all();

        return response()->json([
            'status'=> 200,
            "categories" => $category
        ]);
    }
    public function getcategory() {

        $get_category = Category::where("Status_category", "Afficher")->get();

        return response()->json([
            'status' => 200,
            'category' => $get_category
        ]);
    }
    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'Name_category' => 'required|max:100|unique:categories,Name_category',
            'Status_category' => 'required|max:100',
            'Description_category' => 'required'
        ]);
        // return response()->json("test test");
        if($validator->fails()) {

            return response()->json([
                'error' => $validator->messages(),
                'message' => "Validation des champs sont incorrects",
                'status' => 422
            ]);

        } else {
            $category = Category::create([
                'Name_category' => $request->Name_category,
                'Status_category' => $request->Status_category,
                'Description_category' => $request->Description_category
            ]);

            return response()->json([
                'status' => 200,
                'message' => 'Categorie créee avec success'
            ]);
        }
    }
}