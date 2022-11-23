<?php

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\CommandeController;
use App\Http\Controllers\API\FrontendController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Routes publiques d'authentification
Route::middleware('guest')->group(function() {

    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});


Route::get('/user/get-product', [FrontendController::class, 'GetTableaux']);
Route::get('/user/detail-product/{id}', [FrontendController::class, 'DetailTableaux']);


Route::post('/user/commande', [CommandeController::class, 'placeorder']);

// Route::middleware('auth:sanctum')->group(function() {
// });

// Routes proteges
// Admin
Route::middleware('auth:sanctum','IsApiAdmin')->group(function () {

    Route::get('/authentifier', function() {

        return response()->json([
            'status' => 200,
            'message' => 'autoriser'
        ], 200);
    });

    //route de la page administrateur

    //route de categorie
    Route::get("/admin/get-category", [CategoryController::class, "index"]);
    Route::get("/admin/get-category-partial", [CategoryController::class, "getcategory"]);
    Route::post("/admin/add-category", [CategoryController::class, "store"]);
    Route::get("/admin/edit-category/{id}", [CategoryController::class, "edit"]);
    Route::patch("/admin/update-category/{id}", [CategoryController::class, "update"]);
    Route::delete("/admin/delete-category/{id}", [CategoryController::class, "delete"]);

    //route de produit (Tableau)
    Route::get("/admin/get-product", [ProductController::class, "index"]);
    Route::post("/admin/add-product", [ProductController::class, "store"]);
    Route::get("/admin/edit-product/{id}", [ProductController::class, "edit"]);
    Route::patch("/admin/update-product/{id}", [ProductController::class, "update"]);
    Route::delete("/admin/delete-product/{id}", [ProductController::class, "delete"]);

    //Route de commande
    Route::get("/admin/get-commandes", [CommandeController::class, "index"]);
    Route::get("/admin/get-commandes/detail-commande/{id}", [CommandeController::class, "getproduit"]);

});

// Routes proteges
Route::middleware('auth:sanctum')->group(function () {


 Route::post('/logout', [AuthController::class, 'logout']);

});