import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/User/Card.css"

const Card = ({ produits }) => {
    
     return (
          <div className="cards">
               { produits.length >= 1 ? produits.slice(0, 20).map((produit, index) => {
                   
                    return (

                         <Link to={`/detail-tableau/${produit.id}`} className='card' key={index}>                
                    
                              <div className="image">
                                   <img src={`http://127.0.0.1:8000/${produit.Image_Tableau}`} alt={produit.Name_Tableau} />
                              </div>
                              <div className="infos">
                                   <p className='nom'>{produit.Name_Tableau}</p>
                                   <p className='prix'>{produit.Prix_Tableau.toLocaleString()} FCFA / KG</p>
                              </div>
                          
                         </Link>       
                    )

               }) : "Aucun resulat trouver"
          }
     </div>
     );
};

export default Card;