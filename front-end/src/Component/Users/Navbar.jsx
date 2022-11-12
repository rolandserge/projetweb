import React from 'react';
import { Link } from 'react-router-dom';
import card from "../../Images/card.png"
import '../../Styles/User/Header.css'
import { useSelector } from 'react-redux';
const Navbar = () => {

     const {cards} = useSelector(item => item.panier)

     return (
          <div className='Navbar'>
               <div className='logo'>
                    <h2>Mon logo</h2>
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
               </div>
               <div className='test'>

               </div>
          </div>
     );
};

export default Navbar;