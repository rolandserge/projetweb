import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Component/Users/Navbar';
import "../../Styles/User/Hom.css"
import Footer from '../../Component/Users/Footer';
import Categories from '../../Component/Users/Categories';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

const Home = () => {

     const [login, setLogin] = useState(false)
     const [register, setRegister] = useState(false)

     var value = ""
     if(localStorage.getItem('auth_token')) {
          
          value = <div>
               <button className='deconnexion'>Commencer vos achats</button>
          </div>

    } else {

          value = <>
               {/* <Link to="/login" className='login'>Se connecter</Link> */}
               {/* <Link to="/register" className='register'>S'enregister</Link> */}
               <button className='login' onClick={() => setLogin(true)}>Se connecter</button>
               {login ? <Login modal={() => setLogin(false)} /> : "" }
               <button className='register' onClick={() => setRegister(true)}>S'inscrire</button>
               {register ? <Register modal={() => setRegister(false)} /> : "" }
          </> 
    }

     return (
          <div className={ login | register ? "bodyfixed": 'body'}>
               <header>
                    <Navbar />
               </header>
               <main>        
                    <div className='images'>      
                         <div className='image_droite'>
                             <div className="image_droite_1">
                                   <div className='bg_droite1'>

                                   </div>
                             </div>
                             <div className="image_droite_2">

                             </div>
                         </div>
                         <div className='image_centrale'>
                              <div className='bg_centrale'>

                              </div>
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
                    <Categories />
               </main> 
               <footer>
                    <Footer />
               </footer>
          </div>
     );
};

export default Home;