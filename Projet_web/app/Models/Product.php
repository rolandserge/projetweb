<?php

namespace App\Models;

use App\Models\Category;
use App\Models\Orderitem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        "Name_Tableau",
        "Name_Artiste",
        "Status_Tableau",
        "Prix_Tableau",
        "Largeur_Tableau",
        "Hauteur_Tableau",
        "Image_Tableau",
        "Format_Tableau",
        "Couleur_Tableau",
        "Description_Tableau",
        "categorie_id"
    ];

    // protected $with = ['category'];

    public function categorie() {

        return $this->belongsTo(Category::class,'categorie_id');

   }
   
   public function orderitems() {

    return $this->hasMany(Orderitem::class);

}
}