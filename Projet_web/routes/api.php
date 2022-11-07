<?php

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\CategoryController;
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
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

//Route publique pour user
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/user/get-product', [FrontendController::class, 'GetTableaux']);
Route::get('/user/detail-product/{category}/{id}', [FrontendController::class, 'DetailTableaux']);


Route::middleware('auth:sanctum')->group(function() {

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