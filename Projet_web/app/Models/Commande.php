<?php

namespace App\Models;

use App\Models\User;
use App\Models\Orderitem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Commande extends Model
{
    use HasFactory;

    protected $fillable = ['ville','commune','nom', 'prenom', 'telephone', 'email', 'lieu_livraison', 'payement_mode','total_commande' ,'user_id', 'date_livraison' ,'status'];

    public function orderitems() {
        
        return $this->hasMany(Orderitem::class);
    }
    
    public function user() {

        return $this->belongsTo(User::class,'user_id');

   }
}