import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Component/Users/Navbar';
// import tableau from "../Images/tableau.jpg"
import "../../Styles/User/Hom.css"
import Header from "../../Images/header.png"
import Service from '../../Component/Users/Service';
import Footer from '../../Component/Users/Footer';
import Tableaux from '../../Component/Users/Tableaux';

const Home = () => {


     var value = ""

     if(localStorage.getItem('auth_token')) {
          
          value = <div>
               <button className='deconnexion'>Deconnexion</button>
          </div>

    } else {

          value = <div>
              <Link to="/login" className='login'>Se connecter</Link>
              <Link to="/register" className='register'>S'enregister</Link>
         </div>
    }
     
     return (
          <div>
               <header>
                    <Navbar />
               </header>
               <main>        
                    <div className='images'>      
                         {/* <div className='base'> */}
                         <div className='images_infos'>
                              <div className='bienvenue'>
                                   <h1>les produits vivriers pres de vous</h1>
                                   <p>Acheter vos produits vivriers plus facilement et moins chers sans vous deplacement</p>
                              </div>
                              <div className='authentification'>
                                   {
                                        value
                                   }
                              </div> 
                         </div>
                         <div className='image_header'>
                              <img src={Header} alt="" />
                         </div>
                         {/* </div>             */}
                    </div>


                    <Tableaux />
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