import React from 'react';
import { Link } from 'react-router-dom';
import card from "../../Images/card.png"
import '../../Styles/User/Header.css'
import User from '../../Images/user.png'
import { useSelector } from 'react-redux';

const Navbar = () => {

     const {cards} = useSelector(item => item.panier)

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
                    <div>
                         <img src={card} alt="panier" width={40} />
                         <Link className='item' to="/panier"><span>{cards.length}</span></Link>
                    </div>
                    <div>
                         <div className='user_image'>
                              <img src={User} alt="" />
                         </div>
                         <div>
                           
                                   <Link to="" className=''>Mon profil</Link>
                                   <Link to="" className=''>Tableaux</Link>
                                   <Link to="" className=''>Editer profiel</Link>
                                   <Link to="" className=''>Message</Link>
                                   <Link to="" className=''>Parametre</Link>
                                   <Link to="" className=''>Deconnexion</Link>
                           
                         </div>
                    </div>
               </div>
               <div className='test'>

               </div>
          </div>
     );
};

export default Navbar;