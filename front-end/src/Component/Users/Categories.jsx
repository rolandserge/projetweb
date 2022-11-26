import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from './Card';

const Categories = () => {

     const categorie = useParams()
     const [produits, setProduits] = useState([])
     const [search, setSearch] = useState("")

     useEffect(() => {

          const Produits = async() => {

               try {
                   
                   const response = await axios.get(`/api/user/${categorie.categorie}`);
                 
                    if(response.data.status === 200) {

                         setProduits(response.data.produits)

                    } else if(response.data.status === 400) {

                         console.log(response.data.message)

                    } else if (response.data.status === 404) {

                         console.log(response.data.message)
                        
                    }
               } catch (error) {

                   console.log(error);
               }
          }
               
        Produits()
     }, [categorie])
  
     return (
          <>
          <div className='searchbar'>
                    <div className='search'>
                         <input type="search" onChange={(event) => setSearch(event.target.value)} placeholder='Rechercher des tableaux par leur noms' name="search" />
                    </div>
          </div>
          <div className='cards'>
               {
                         // var key = ["Name_Tableau, categorie."]
                         produits.filter((produit) => {

                              if(search === "") {

                                   return produit

                              } else if(produit.Name_Tableau.toLowerCase().includes(search.toLowerCase())) {

                                   if(produit.Name_Tableau === 0) {

                                        return "Aucun tableau est associé a ce nom"
                                   }
                                   return produit
                              }
                         })
                         .map((produit, index) => {

                              return (
                             
                                   <Card key={index} produit={produit} />
                             
                              )
                         })
                    }
          </div>
          </>
     );
};

export default Categories;