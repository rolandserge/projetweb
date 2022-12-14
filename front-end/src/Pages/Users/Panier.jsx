import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Component/Users/Navbar';
import "../../Styles/User/Panier.css"
import Supprimer from "../../Images/supprimer.png"
import Vider from "../../Images/vider.png"
import Footer from '../../Component/Users/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { clearCard, decrement, getTotals, increment, remove } from '../../Redux/SystemPanier';

const Panier = () => {

     const {cards, totalAmont} = useSelector(item => item.panier)
     const dispatch = useDispatch()
    
     useEffect(() => {

          dispatch(getTotals())

     }, [cards, dispatch])


     return (
          <div className='body_panier'>
              <Navbar />
              {
                   cards.length >= 1 ? 
              <div className='containers'>
                    <div className='titre'>
                         <p>Recapitulatif de votre panier</p>
                    </div>
                    <div className="paniers">
                         {
                         cards.map((card) => {
                              return (
          
                              <div className="contents" key={card.id}>
                                   <div className="imge">
                                        <img src={`http://127.0.0.1:8000/${card.Image_Tableau}`} alt="" />
                                   </div>
                                   <div className="content">
                                        <div className="nom">
                                             <p>{card.Name_Tableau}</p>
                                        </div>
                                        <div className="supprimer">
                                             <img src={Supprimer} alt="" />
                                             <button onClick={() => dispatch(remove(card))}>Supprimer</button>
                                        </div>
                                   </div>
                                   <div className="quantite">
                                        <button className='action' onClick={() => dispatch(decrement(card))}>-</button>
                                        <p>{card.quantite}</p>
                                        <button className='action' onClick={() => dispatch(increment(card))}>+</button>
                                   </div>
                                   <div className="prix_unit">
                                        <p>{card.Prix_Tableau.toLocaleString()} <span>FCFA</span></p>
                                   </div>
                                   <div className="total">
                                        <p>{(card.Prix_Tableau * card.quantite).toLocaleString()} FCFA</p>
                                   </div>
                              </div>
                              )
                         })
                    }
                    </div>
                    <div className="vider_panier">
                         <div className="viders">
                              <div className='vide'>
                                   <img src={Vider} alt="" />
                                   <button onClick={() => dispatch(clearCard())}>Vider le panier</button>
                              </div>    
                              <div className="totaux">
                                   <h3>TOTAL : {totalAmont.toLocaleString()} FCFA</h3>
                              </div>
                         </div> 
                    </div>
                    <div className="continuer">
                         <Link to="/" className='continue'>Continuer vos achats</Link>
                         <Link to="/detail-payement" className='button'>Finaliser votre commande</Link>
                    </div>
               </div> : <div className='panier_vide'>

                         <p>Votre panier est vide</p>
                         <div>
                              <Link to="/" className='continuer'>Commencer vos achats</Link>
                         </div>
               </div>
              }
               <Footer />
          </div>
     );
};

export default Panier;