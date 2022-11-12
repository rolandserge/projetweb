import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Component/Users/Navbar';
// import tableau from "../Images/tableau.jpg"
import "../../Styles/User/Hom.css"
// import Sliders from '../Component/Sliders';
// import Sliders from '../../Component/Slide';
import Card from '../../Component/Users/Card';
// import Promotion from '../../Component/Users/Promotion';
import Service from '../../Component/Users/Service';
import Footer from '../../Component/Users/Footer';

const Home = () => {

     var value = ""

     if(localStorage.getItem('auth_token')) {
          
          value = <div>
               <Link >Bonjour a vous</Link>
          </div>

    } else {

          value = <div>
              <Link to="/login" className='login'>Login</Link>
              <Link to="/register" className='register'>Register</Link>
         </div>
    }
     
     return (
          <div>
               <header>
                    <Navbar />
               </header>
               <main>        
                    <div className='images'>      
                         <div className='base'>
                         <div>
                              <div className='bienvenue'>
                                   <h1>TABLEAUX MODERNES</h1>
                                   <p>Des toiles d’artiste disponibles à la vente directe ou sur commande</p>
                              </div>
                              <div className='authentification'>
                                   {
                                        value
                                   }
                              </div> 
                              </div>
                         </div>            
                    </div>
                    <div className='searchbar'>
                         <div className='search'>
                              <input type="search" placeholder='Rechercher des tableaux' name="search" />
                              <button>Search</button>
                         </div>
                    </div>
                    {/* <div className='slider_container'> */}

               
                              {/* <h2>Les nouveaux tableaux</h2> */}
               
                         {/* <Sliders /> */}
                    {/* </div> */}
                    <Card />
                    {/* <Promotion /> */}
                    <Service />
               </main> 
               <footer>
                    <Footer />
               </footer>
          </div>
     );
};

export default Home;