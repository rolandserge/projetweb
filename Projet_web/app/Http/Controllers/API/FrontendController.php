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