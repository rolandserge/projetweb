import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom"
import axios from 'axios';
import Card from './Card';

const Tableaux = () => {

     const [tableaux, setTableaux] = useState([])
     const [search, setSearch] = useState("")
     const [open, setOpen] = useState(false)
     // const [cat2, setCat2] = useState(false)

     useEffect(() => {

          const Tableaux = async() => {

               try {
                   const response = await axios.get("/api/user/get-product");
                 
                    if(response.data.status === 200) {

                         setTableaux(response.data.tableaux)
                    }
               } catch (error) {

                   console.log(error);
               }
          }
               
        Tableaux()
     }, [])
     
     return (
          <>
               <div className='searchbar'>
                    <div className='search'>
                         <input type="search" onChange={(event) => setSearch(event.target.value)} placeholder='Rechercher des tableaux par leur noms' name="search" />
                    </div>
               </div>
               <div className="listes_categories">
                    <button onClick={() => setOpen(!open)} className={`${open ? 'active': ''}`}>Categorie 1</button>
                    <button onClick={() => setOpen1(!open)} className={`${open ? 'active': ''}`}>Categorie 1</button>
                    <button onClick={() => setOpen2(!open)} className={`${open ? 'active': ''}`}>Categorie 1</button>
                    <button onClick={() => setOpen(!open)} className={`${open ? 'active': ''}`}>Categorie 1</button>
                    <button onClick={() => setOpen(!open)} className={`${open ? 'active': ''}`}>Categorie product 1</button>
                    <button onClick={() => setOpen(!open)} className={`${open ? 'active': ''}`}>Categorie 1</button>
                    {/* <button>Categorie 1</button> */}
                    {/* <button>Categorie 1</button> */}
               </div>
               <div className='cards'>
                    {
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
                    }
               </div>
          </> 
     );
};

export default Tableaux;