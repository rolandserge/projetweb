import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Component/Users/Navbar';
import "../../Styles/User/Hom.css"
import Header from "../../Images/header.png"
import Service from '../../Component/Users/Service';
import Footer from '../../Component/Users/Footer';
import Tableaux from '../../Component/Users/Tableaux';
import Categories from '../../Component/Users/Categories';
import Categorie from '../../Component/Users/Categorie';
import axios from 'axios';
import Card from '../../Component/Users/Card';

const Home = () => {

     const [categories, setCategories] = useState([])
     const [produits, setProduits] = useState([])
     const location = useLocation()

     const [search, setSearch] = useState("")

     var keys = ['Name_Tableau','categorie.Namecategory', 'Prix_Tableau']
     
     const recherche = (prod) => {

          return prod.filter((produit) => keys.some((key) => String(produit[key]).toLowerCase().includes(search.toLowerCase())))
          // return prod.filter( produit => Object.keys(produit).some( keys => String(produit[keys]).toLowerCase().includes(search.toLowerCase())))

     }
     useEffect(() => {

          const Categories = async() => {

               try {
                   const response = await axios.get("/api/user/get-product");
                 
                    if(response.data.status === 200) {

                         setProduits(response.data.tableaux)
                         setCategories(response.data.categories)
                    }
               } catch (error) {

                   console.log(error);
               }
          }
               
        Categories()
     }, [])

     var value = ""

     if(localStorage.getItem('auth_token')) {
          
          value = <div>
               <button className='deconnexion'>Commencer vos achats</button>
          </div>

    } else {

          value = <>
               <Link to="/login" className='login'>Se connecter</Link>
               <Link to="/register" className='register'>S'enregister</Link>
          </> 
    }
     var produit = ""

     if( location.pathname === "/") {
     
          produit = <Card produits={recherche(produits)} />
          
     } else {

          produit = <Outlet />
         
     }
     return (
          <div>
               <header>
                    <Navbar />
               </header>
               <main>        
                    <div className='images'>      
                         <div className='image_droite'>
                             <div className="image_droite_1">

                             </div>
                             <div className="image_droite_2">

                             </div>
                         </div>
                         <div className='image_centrale'>
                              
                         </div>
                         <div className='image_gauche'>      
                              <div>
                                   <p>
                                        Soyez les bienvenue sur notre site pour vos achats !
                                   </p>
                              </div>
                              <div className='authentification'>
                                   {
                                        value
                                   }
                              </div>
                         </div>
                   </div>

                    {/* barre de recherche */}
                    <div className='searchbar'>
                         <div className='search'>
                              <input type="search" onChange={(event) => setSearch(event.target.value)} placeholder='Rechercher des tableaux par leur noms' name="search" />
                         </div>
                    </div>
                    <>
                         {/* //liste de toutes les categories */}
                         <Categorie categories = {categories }/>
                    </>
                    <>
                         {
                              // <Outlet />
                              produit    
                         }
                    </>
                    
                    {/* <Card produits={recherche(produits)} /> */}
                    {/* <Outlet /> */}
                   
                    <Service />
               </main> 
               <footer>
                    <Footer />
               </footer>
          </div>
     );
};

export default Home;