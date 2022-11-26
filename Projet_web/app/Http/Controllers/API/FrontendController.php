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
        $categories = Category::where("Status_category", "Afficher")->get();

        return response()->json([
            'status' => 200,
            'tableaux' => $tableaux,
            "categories" => $categories
        ]);
    }

    public function getproduits($categorie) {

        $category = Category::where('Name_category', $categorie)->first();
        $produits = Product::where("Status_Tableau", "Afficher")->with('Categorie')->get();

        if($category) {

                $product = Product::where('categorie_id', $category->id)->get();

                if($product) {

                    return response()->json([

                        'status' => 200,
                        'produits' => $product,
                        'allproducts' => $produits
                    ]);

                } else {

                    return response()->json([
                        'status' => 400,
                        'message' => "Cette categorie n'a pas de produits"
                    ]);
                }

        } else {

            return response()->json([
                'status' => 404,
                'message' => "Cette categorie n'existe pas",
                'result' => $categorie
            ]);
        }
    }
    public function DetailTableaux($id) {

            $product = Product::with('Categorie')->where("id",'=', $id)->first();

            if($product) {

                return response()->json([
                    'status' => 200,
                    'produit' => $product,
                    ]);

            } else {

                return response()->json([
                    'status' => 400,
                    'error' => "Aucun tableau associe a cette categorie"
                    ]);
            }

    }
}