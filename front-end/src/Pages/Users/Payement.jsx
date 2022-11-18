import React, {useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../Component/Users/Card';
import Navbar from '../../Component/Users/Navbar';
import "../../Styles/User/Payement.css"

const Payement = () => {

     const {cards, totalAmont} = useSelector(item => item.panier)
     
     const villes = [
          {
               ville : "abidjan",
               quartier : "Yopougon"
          }
          ,
          {
               ville : "abidjan",
               quartier : "Koumassi"
          }
          ,
          {
               ville : "abidjan",
               quartier : "Plateau"
          }
          ,
          {
               ville : "abidjan",
               quartier : "Marcory"
          }
          ,
          {
               ville : "abidjan",
               quartier : "Port-bouet"
          }
           ,    
          {
               ville : "abidjan",
               quartier : "Cocody"
          }
          ,
          {
               ville : "Abidjan",
               quartier : "Treichville"
          }
          ,
          {
               ville : "Abidjan",
               quartier : "Adjame"
          }
          ,
          {
               ville : "Abidjan",
               quartier : "Bassam"
          }
          ,
          {
               ville : "abidjan",
               quartier : "Abobo"
          }
          ,
          {
               ville : "abidjan",
               quartier : "Bassam"
          }
          ,
          {
               ville : "Yakro",
               quartier : "220 logements"
          }
          ,
          {
               ville : "Yakro",
               quartier : "Assabou"
          }
          ,
          {
               ville : "Yakro",
               quartier : "Sopim"
          }
          ,
          {
               ville : "Yakro",
               quartier : "Kokrenou"
          }
          ,
          {
               ville : "Yakro",
               quartier : "Dioulabougou"
          }
          ,
          {
               ville : "Yakro",
               quartier : "Habitat"
          }
     ]
     const [commune, setCommune] = useState("Abidjan")

     const Communes = ['Abidjan','Yakro']

     return (
          <div>
               <Navbar />
               <div>
                    <p>La livraison est gratuite partout a Abidjan ! Vous serez livez le lendemain de votre commande</p>
               </div>
              <div className='form_commande'>
                    <form action="">
                         <div className='titre_livraison'>
                              <h2>Informations de livraison</h2>
                         </div> 
                         <div>
                              <label htmlFor="">Choississez votre ville</label>
                              <select name="" id="" value={commune} onChange={(e) => setCommune(e.target.value)}>
                                   {
                                        Communes.map((cmne, index) => {

                                             return (

                                                  <option key={index} value={cmne}>{cmne}</option>
                                             )
                                        })
                                   }
                              
                              </select>
                         </div>
                         <div>
                              <label htmlFor="">Choississez votre commune</label>
                              <select name="" id="">
                                   {
                                        villes.filter((qtier) => qtier.ville.toLocaleLowerCase().includes(commune.toLocaleLowerCase()))
                                        .map((qtier, index) => {

                                             return (
                                                  
                                                  <option value={qtier.quartier} key={index}>{qtier.quartier}</option>
                                             )
                                        })
                                   }
                              </select>
                         </div>
                         <div>
                              <label htmlFor="">Entrer votre nom et prenom</label>
                              <input type="text" name="" id="" placeholder='Ex : Pierre Gadeu Jean Cravate' required />
                         </div>
                         <div>
                              <label htmlFor="">Entrer votre numero de telephone</label>
                              <input type="text" name="" id="" required placeholder='Ex: 07 65 55 66 54 / 05 56 65 13 78' />
                         </div>
                         <div className='textarea'>
                              <label htmlFor="">Entrer l'adresse de livraison</label>
                              <textarea name="" required placeholder='Ex: Remblais / Terminus 03'></textarea>
                         </div>
                         <div className='boutton_commande'>
                              {/* <button>Payer en ligne</button> */}
                              <button>Passer la commande</button>
                         </div>
                    </form>
                    <div className='panier_rempli'>
                         <div>
                              <Link to="/panier" className='retour_panier'>Retour au panier</Link>
                         </div>
                         <div>
                              <table className='table_panier'>
                                   <thead>
                                        <tr>
                                             <th>Nom du tableau</th>
                                             <th>Prix du tableau</th>
                                             <th>Quantite</th>
                                             <th>Total</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             cards.map((card, index) => {

                                                  return (

                                                       <tr key={index}>
                                                            <td>{card.Name_Tableau}</td>
                                                            <td>
                                                                 {card.Prix_Tableau.toLocaleString()} <span>FCFA</span>
                                                            </td>
                                                            <td>{card.quantite}</td>
                                                            <td>{(card.Prix_Tableau * card.quantite).toLocaleString()} <span>FCFA</span></td>
                                                       </tr>
                                                  )
                                             })
                                        }
                                   </tbody>
                                   <tfoot>
                                        <tr>
                                             <td colSpan={2}>
                                                  Grand total
                                             </td>
                                             <td colSpan={2}>
                                                  {totalAmont.toLocaleString()} <span>FCFA</span>
                                             </td>
                                        </tr>
                                   </tfoot>
                              </table>
                         </div>
                    </div>
              </div>
          </div>
     );
};

export default Payement;
