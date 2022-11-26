<?php

namespace App\Models;

use App\Models\Product;
use App\Models\Commande;
use App\Models\Orderitem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Orderitem extends Model
{
    use HasFactory;

    protected $fillable = ['commande_id', 'product_id', 'qty', 'prix'];

    public function commande() {
        
        return $this->belongsTo(Commande::class);
    }
    public function product() {
        
        return $this->belongsTo(Product::class);
    }
}