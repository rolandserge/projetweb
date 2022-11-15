import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import card from "../../Images/card.png"
import '../../Styles/User/Header.css'
import User from '../../Images/user.png'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from "axios"

const Navbar = () => {

     const {cards} = useSelector(item => item.panier)
     const [open, setOpen] = useState(false)

     const navigate = useNavigate()
     const lagout = async (e) => {

          e.preventDefault()

          await axios.post('/api/logout').then(res => {

               if(res.data.status === 200) {

                    // sessionStorage.removeItem('auth_token')
                    // sessionStorage.removeItem('auth_name')
                    localStorage.clear()

                    navigate("/login")
                    // <Navigate to='/connexion' />
               }
          })
     }

     var auth = ""

     if(localStorage.getItem("auth_token")) {

          auth = 
          <> 
               <div onClick={lagout}>
                    Logout
               </div>
               <div className='photo_user_div'>
                    <div className='user_image' onClick={() => setOpen(!open)}>
                         <img src={User} alt="" />
                    </div>
                    {
                         open && 
                              <div className={`user_image_element ${open ? 'active' : 'inactive'}`}>                    
                                   <Link to="" className=''>Mon profil</Link>
                                   <Link to="" className=''>Tableaux</Link>
                                   <Link to="" className=''>Editer profiel</Link>
                                   <Link to="" className=''>Message</Link>
                                   <Link to="" className=''>Parametre</Link>
                                   <Link to="" className=''>Deconnexion</Link>                         
                                </div>
                    }
               </div>
          </>
     }

     return (
          <div className='Navbar'>
               <div className='logo'>
                    <h4>Mon logo</h4>
               </div>
               <div className='element'>
                    <div>
                         <Link className='item' to="/">Acceuil</Link>
                    </div> 
                    <div>
                         <Link className='item' to="">Tableaux</Link>
                    </div>
                    
                    <div>
                         <Link className='item' to="">Nos actualités</Link>
                    </div>
                    <div>
                         <Link className='item' to="">A propos</Link>
                    </div>
                    <Link to="/panier">
                         <img src={card} alt="panier" width={40} />
                         <span>{cards.length}</span>
                    </Link>
                    {
                         auth              
                    }
                    
               </div>
               <div className='test'>

               </div>
          </div>
     );
};

export default Navbar;