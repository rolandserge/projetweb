<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('Name_Tableau');
            $table->string('Name_Artiste');
            $table->string('Status_Tableau');
            $table->integer('Prix_Tableau');
            $table->string('Largeur_Tableau');
            $table->string('Hauteur_Tableau');
            $table->string('Image_Tableau');
            $table->string('Format_Tableau');
            $table->string('Couleur_Tableau');
            $table->integer('Quantite_Tableau')->default(1);
            $table->longText('Description_Tableau');
            $table->foreignId('categorie_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};