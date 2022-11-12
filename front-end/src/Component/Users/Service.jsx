import React from 'react';
import "../../Styles/User/Service.css"
import livraisons from "../../Images/livraisons.png"
import original from '../../Images/original.png'
import commande from "../../Images/commande.png"
import cadenas from "../../Images/cadenas.png"

const Service = () => {
     return (
          <div className='services'>
               <div className='service'>
                    <div className="photo">
                         <img src={original} alt="" />
                    </div>
                    <div className="info">
                         <p>Toiles uniques et originales</p>
                    </div>
               </div>
               <div className='service'>
                    <div className="photo">
                         <img src={cadenas} alt="" />
                    </div>
                    <div className="info">
                         <p>Paiement sécurisé débit à l’expédition</p>
                    </div>
               </div>
               <div className='service'>
                    <div className="photo">
                         <img src={commande} alt="" />
                    </div>
                    <div className="info">
                         <p>Livraison offerte et échange gratuit</p>
                    </div>
               </div>
               <div className='service'>
                    <div className="photo">
                         <img src={livraisons} alt="" />
                    </div>
                    <div className="info">
                         <p>Passer vos commandes de tableaux facilement</p>
                    </div>
               </div>
               
          </div>
     );
};

export default Service;