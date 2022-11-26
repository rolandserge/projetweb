<?php

namespace App\Http\Controllers\API;

use App\Models\Product;
use App\Models\Commande;
use App\Models\Orderitem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CommandeController extends Controller
{
    public function index() {

        $commandes = Commande::all();

        return response()->json([
            'status' => 200,
            "message" => "Success",
            'commandes' => $commandes
        ]);

    }
    public function placeorder(Request $request) {

        if(auth("sanctum")->check()) {

            $validator = Validator::make($request->all(), [

                'ville' => 'required|string',
                'commune' => 'required|string',
                'nom' => 'required|string',
                'prenom' => "required|string",
                'telephone' => 'required|numeric',
                'email' => 'required|email',
                'lieu_livraison' => 'required',
            ]);

            if($validator->fails()) {

                return response()->json([
                    'error' => $validator->messages(),
                    'status' => 202,
                    'message' => "Veillez bien renseigner les champs"
                ]);


            } else {

                $order = Commande::create([
                    'ville' => $request->ville,
                    'commune' => $request->commune,
                    'nom' => $request->nom,
                    'prenom' => $request->prenom,
                    'telephone' => $request->telephone,
                    'email' => $request->email,
                    'lieu_livraison' => $request->lieu_livraison,
                    'payement_mode' => "Cash",
                    'total_commande' => $request->totalAmont,
                    "date_livraison" => $request->date_livraison,
                    'user_id' => auth('sanctum')->user()->id,
                ]);

                $paniers[] = json_decode($request->panier);

                $ordersitems = [];

                foreach($paniers as $panier) {

                    foreach($panier as $value) {

                        $ordersitems[] = [
                            'product_id' => $value->id,
                            'qty' => $value->quantite,
                            'prix' => $value->Prix_Tableau
                        ];
                        $product = Product::where('id','=', $value->id)->first();

                        $product->Quantite_Tableau = $product->Quantite_Tableau - $value->quantite;
                        $product->update();
                }
            }
                $order->orderitems()->createMany($ordersitems);

                return response()->json([
                    'status' => 200,
                    "message" => "Success"
                ]);
            }

        } else {

            return response()->json([

                'status' => 201,
                'message' => "Veillez vous connecter"

                ]);
        }
    }

    public function getproduit($id) {

        $produits = Orderitem::with('Product')->where("commande_id",'=', $id)->get();

        return response()->json([

            'status' => 200,
            'produits' => $produits

            ]);
    }
}