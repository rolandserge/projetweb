import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom"
import axios from 'axios';
import Card from './Card';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Tableaux = () => {

     const [tableaux, setTableaux] = useState([])
     const [categories, setCategories] = useState([])

     const [search, setSearch] = useState("")
     const location = useLocation()

     useEffect(() => {

          const Tableaux = async() => {

               try {
                   const response = await axios.get("/api/user/get-product");
                 
                    if(response.data.status === 200) {

                         setTableaux(response.data.tableaux)
                         setCategories(response.data.categories)
                    }
               } catch (error) {

                   console.log(error);
               }
          }
               
        Tableaux()
     }, [])
     var donne = ""
     if(location.pathname === "/") {
          {
                         // var key = ["Name_Tableau, categorie."]
               donne = 
               tableaux.filter((produit) => {

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
                             
                                   <Card key={index} produit={produit}/>
                             
                              )
                         })
                    }
     } else {
          donne = <Outlet />
     }
     return (
          <>
               
               <div className="listes_categories">
                    {
                         categories.map((categorie, index) => {
                              return (

                                   <Link key={index} className={ location.pathname === `/categories/${categorie.Name_category}` ? 'button active' : "button"} to={`/categories/${categorie.Name_category}`}>{categorie.Name_category}</Link>
                              )
                         })
                    }
               </div>
               <div className='cards'>
                    {/* {
                         // var key = ["Name_Tableau, categorie."]
                         tableaux.filter((table) => {

                              if(search === "") {

                                   return table

                              } else if(table.Name_Tableau.toLowerCase().includes(search.toLowerCase())) {

                                   if(table.Name_Tableau === 0) {

                                        return "Aucun tableau est associé a ce nom"
                                   }
                                   return table
                              }
                         })
                         .map((table, index) => {
                              return (
                             
                                   <Card key={index} table={table} />
                             
                              )
                         })
                    } */}
                    {/* <Outlet /> */}
                    {
                         donne
                    }
               </div>
          </> 
     );
};

export default Tableaux;