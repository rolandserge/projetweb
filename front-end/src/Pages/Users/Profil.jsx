import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Component/Users/Footer';
import Navbar from '../../Component/Users/Navbar';
import User from "../../Images/user.png"
import "../../Styles/User/Profil/Profil.css"
const Profil = () => {

     const location = useLocation()

     return (
          <div className='fond'>
               <Navbar />
               <div className='space_client'>
                    <div className='profil_image'>
                         <img src={User} alt="" />
                    </div>
                    <div className='profil_user_data'>
                         <h3>Nom : Roland</h3>
                         <p>E-mail : exemple@gmail.com</p>
                         <p>Numero : +225 07 07 07 07 07</p>
                    </div>
               </div>
               <div className='profil_user'>
                    <div className='profil_user_div'>
                         <aside>
                              <Link to="/mon-profil" className={location.pathname === "/mon-profil" ? 'profil_link active' : "profil_link"}>Voir profile</Link>
                              <Link to="/mon-profil/editer-profil" className={location.pathname === "/mon-profil/editer-profil" ? "profil_link active" : "profil_link"}>Editer profile</Link>
                              <Link to="/mon-profil/liste-commandes" className={location.pathname === "/mon-profil/liste-commandes" ? 'profil_link active' : 'profil_link'}>Mes commandes</Link>
                              <Link to="" className='profil_link'>Deconnexion</Link>
                         </aside>
                         <article>
                             <Outlet />
                         </article>
                    </div>
               </div>
               <Footer />
          </div>
     );
};

export default Profil;