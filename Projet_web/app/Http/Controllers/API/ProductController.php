<?php

namespace App\Http\Controllers\API;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index() {

        $product = Product::with('Categorie')->get();

        if($product) {

            return response()->json([
                'status' => 200,
                'produit' => $product
            ]);

        } else {

            return response()->json([
                'status' => 404,
                'message' => "Aucun produit enregistrée"
            ]);
        }

    }
    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'Name_Tableau' => 'required|max:100',
            'Name_Artiste' => 'required|max:100',
            'Prix_Tableau' => 'required|numeric',
            'Largeur_Tableau' => 'required|numeric',
            'Hauteur_Tableau' => 'required|numeric',
            'Image_Tableau' => 'required|image|mimes:jpg,jpeg',
            'Format_Tableau' => 'required|max:100',
            'Couleur_Tableau' => 'required|max:100',
            'Description_Tableau' => 'required'
        ]);

        if($validator->fails()) {

            return response()->json([
                'error' => $validator->messages(),
                'status' => 422,
                'message' => "Veillez bien renseigner les champs"
            ]);

        }

    //    return response()->json("test");
        else {

            if($request->hasFile('Image_Tableau')) {

                $file = $request->file("Image_Tableau");
                $extension = $file->getClientOriginalExtension();
                $filename = time().'.'.$extension;
                $file->move(public_path('uploads/product/'), $filename);
                $image = 'uploads/product/'.$filename;


            }
            $product = Product::create([
                'Name_Tableau' => $request->Name_Tableau,
                'Name_Artiste' => $request->Name_Artiste,
                'Status_Tableau' => $request->Status_Tableau,
                'Prix_Tableau' => $request->Prix_Tableau,
                'Largeur_Tableau' => $request->Largeur_Tableau,
                'Hauteur_Tableau' => $request->Hauteur_Tableau,
                'Image_Tableau' => $image,
                'Format_Tableau' => $request->Format_Tableau,
                'Couleur_Tableau' => $request->Couleur_Tableau,
                'Description_Tableau' => $request->Description_Tableau,
                'categorie_id' => $request->categorie_id
            ]);

            return response()->json([
                'status' => 200,
                'message' => 'Produit créee avec success'
            ]);
        }
    }

    public function edit($id) {

        $product = Product::find($id);

        if($product) {

            return response()->json([
                'status' => 200,
                'product' => $product
            ]);

        } else {

            return response()->json([
                'status' => 404,
                'message' => "Produit pas disponible"
            ]);

        }

    }

    public function update(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'category_id' => 'required',
            'slug' => 'required|max:100',
            'name' => 'required|max:100',
            'prix' => 'required|numeric',
            'prixbas' => 'required|numeric',
            'quantite' => 'required|numeric',
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg',
            'description' => 'required'
        ]);

        if($validator->fails()) {

            return response()->json([
                'error' => $validator->messages(),
                'status' => 422,
                'message' => "Veillez bien renseigner les champs"
            ]);

        }
        else {

            $product = Product::find($id);


            if($request->hasFile('image')) {

                $path = $product->image;

                if($path){

                    $exists = Storage::disk('public')->exists("uploads/product/{$product->image}");

                    if($exists){

                        Storage::disk('public')->delete("uploads/product/{$product->image}");
                    }
                }

                $file = $request->file("image");
                $extension = $file->getClientOriginalExtension();
                $filename = time().'.'.$extension;
                $file->move(public_path('uploads/product/'), $filename);

                $image = 'uploads/product/'.$filename;
            }


            if($product) {

                $product->category_id = $request->category_id;
                $product->slug = $request->slug;
                $product->name = $request->name;
                $product->prix = $request->prix;
                $product->prixbas = $request->prixbas;
                $product->quantite = $request->quantite;
                $product->image = $image;
                $product->description = $request->description;
                $product->update();

                return response()->json([
                    'status' => 200,
                    'message' => "Produit modifiee avec succes"
                ]);
            } else {

                return response()->json([
                    'status' => 404,
                    'message' => "Pas de produit pour ce ID"
                ]);
            }

    }}
    public function delete($id) {

        $category = Category::find($id);

        if($category) {

            $category->delete();

            return response()->json([
                'status' => 200,
                'message' => "Categorie supprimer avec succes"
            ]);

        } else {

            return response()->json([
                'status' => 404,
                'message' => "Pas de categorie pour ce ID"
            ]);

        }
    }
}