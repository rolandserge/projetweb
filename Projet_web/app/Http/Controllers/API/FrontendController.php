<?php

namespace App\Http\Controllers\API;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FrontendController extends Controller
{
    public function GetTableaux() {

        $tableaux = Product::where("Status_Tableau", "Afficher")->with('Categorie')->get();
        //  $tableaux = Product::all();

        return response()->json([
            'status' => 200,
            'tableaux' => $tableaux
        ]);
    }

    public function DetailTableaux($category, $id) {

        $category = Category::where('Name_category',$category)->first();

        if($category) {

            $product = Product::where("categorie_id", $category->id)->where("id",'=', $id)->first();

            if($product) {

                return response()->json([
                    'status' => 200,
                    'produit' => $product,
                    'categorie' => $category
                    ]);

            } else {

                return response()->json([
                    'status' => 400,
                    'error' => "Aucun tableau associe a cette categorie"
                    ]);
            }
        } else {
            return response()->json([
                'status' => 420,
                'categorie' => $category,
                'error' => "Cette categorie n'existe pas"
            ]);
        }
    }
}