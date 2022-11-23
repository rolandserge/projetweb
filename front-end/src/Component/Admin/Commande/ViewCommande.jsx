import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Editer from "../../../Images/Admin/editer.png"
import Voir from "../../../Images/Admin/voir.png"
import "../../../Styles/Admin/Commande.css"
import axios from 'axios';
import Statistique from '../Dashbord/Statistique';

const ViewCommande = () => {

     const [commandes, setCommandes] = useState([])

     useEffect(() => {
          (async function () {

               try {
                   const response = await axios.get("/api/admin/get-commandes");
                 
                    if(response.data.status === 200) {

                         setCommandes(response.data.commandes)
                    }
               } catch (error) {

                   console.log(error);
               }
           })();
     }, [])

     // var date = new Date().toISOString();
     // date.setTime(date.getTime() + 48 * 3600 * 1000);

     // console.log((date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()))
     //fonction qui me permet de convertir un timestamps
     const formatDate = (dateString) => {
          const options = { year: "numeric", month: "long", day: "numeric", hour: 'numeric', minute: 'numeric'}
          return new Date(dateString).toLocaleDateString(undefined, options)
     }
        

     return (
          <div>
               <div>
                    <p>Dashbord / Commande / voir-commande</p>
               </div>
               <Statistique />
               <div className="category_div">    
                    <div className="commande_element">
                         <div className='cat_titre'>
                              commandes recentes
                         </div>
                         <div className="commande_nb">
                              <p>Afficher</p>
                              <select name="" id="">
                                   <option value="">10</option>
                                   <option value="">20</option>
                                   <option value="">50</option>
                                   <option value="">100</option>
                              </select>
                         </div>     
                    </div>
                    <div className="category_liste">
                         <table className='table'>
                              <thead>
                                   <tr>
                                        <th className='id_commande'>Id</th>
                                        <th className='lieu_livraison'>Lieu de livraison</th>
                                        <th className='date_commande'>Date de la commande</th>
                                        <th className='date_livraison'>Date de livraison</th>
                                        <th className='status_commande'>Status</th>
                                        <th className='total_commande'>Total</th>
                                        <th colSpan="2" className='action_commande'>Action</th>
                                   </tr>
                              </thead>
                              <tbody className='tbody'>
                                   {
                                        commandes.sort((a, b) => a.id < b.id ? 1 : -1).map((commande) => {

                                             return (

                                                  <tr key={commande.id}>
                                                       <td><span>#</span> {commande.id}</td>
                                                       <td>{commande.lieu_livraison}</td>
                                                       <td>{formatDate(commande.created_at)}</td>
                                                       <td>{commande.date_livraison} 22-01-2100</td>
                                                       <td>{commande.status}</td>
                                                       <td>{commande.total_commande.toLocaleString()} <span>FCFA</span></td>
                                                       <td className='editer_action'>
                                                            {/* <td className='voir_action'> */}
                                                                 <div className="voir_btn">
                                                                      <Link to={`/admin/commande/view-commandes/total-commande/${commande.id}`} className='lien_voir'><img src={Voir} alt="" /></Link>
                                                                 </div>
                                                            {/* </td> */}
                                                       </td>
                                                       <td className='editer_action'>
                                                            {/* <td className='voir_action'> */}
                                                                 <div className="voir_btn">
                                                                      <Link to={`/admin/commande/view-commandes/detail-commande/${commande.id}`} className='lien_voir'><img src={Editer} alt="" /></Link>
                                                                 </div>
                                                            {/* </td> */}
                                                       </td>
                                                  </tr>
                                             )
                                        })
                                   }
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default ViewCommande;