import React from 'react';
import { Link } from 'react-router-dom';
import Voir from "../../../Images/Admin/voir.png"
import "../../../Styles/User/Profil/CommandeUser.css"
const CommandeUser = () => {
     return (
          <div>
               <div className='liste_commande_user'>
                    <div className='commande_nom'>
                         <p>La liste de mes commandes</p>
                    </div>
                    <table className='user_commande_table'>
                         <thead className='user_commande_thead'>
                              <tr>
                                   <th className='commande_id'># Code</th>
                                   <th>Date de commande</th>
                                   <th>Date de livraison</th>
                                   <th className='commande_status'>Status</th>
                                   <th>Total</th>
                                   <th className='action_commande'>Action</th>
                              </tr>
                         </thead>
                         <tbody className='user_commande_tbody'>
                              <tr>
                                   <td>#1671</td>
                                   <td>22 Novembre 2022</td>
                                   <td>25 Decembre 2022</td>
                                   <td>En cour ...</td>
                                   <td>10 000 FCFA</td>
                                   <td className='voir_commande'>
                                        <Link to="" className='lien_voir'><img src={Voir} alt="" /></Link>
                                   </td>
                              </tr>
                              <tr>
                                   <td>#1671</td>
                                   <td>22 Novembre 2022</td>
                                   <td>25 Decembre 2022</td>
                                   <td>En cour ...</td>
                                   <td>10 000 000 FCFA</td>
                                   <td className='voir_commande'>
                                        <Link to="" className='lien_voir'><img src={Voir} alt="" /></Link>
                                   </td>
                              </tr>
                              <tr>
                                   <td>#1671</td>
                                   <td>22 Novembre 2022</td>
                                   <td>25 Decembre 2022</td>
                                   <td>En cour ...</td>
                                   <td>10 000 FCFA</td>
                                   <td className='voir_commande'>
                                        <Link to="" className='lien_voir'><img src={Voir} alt="" /></Link>
                                   </td>
                              </tr>
                              <tr>
                                   <td>#1671</td>
                                   <td>22 Novembre 2022</td>
                                   <td>25 Decembre 2022</td>
                                   <td>En cour ...</td>
                                   <td>10 000 FCFA</td>
                                   <td className='voir_commande'>
                                        <Link to="" className='lien_voir'><img src={Voir} alt="" /></Link>
                                   </td>
                              </tr>
                              <tr>
                                   <td>#1671</td>
                                   <td>22 Novembre 2022</td>
                                   <td>27 Septembre 2022</td>
                                   <td>Livrer</td>
                                   <td>10 000 FCFA</td>
                                   <td className='voir_commande'>
                                        <Link to="" className='lien_voir'><img src={Voir} alt="" /></Link>
                                   </td>
                              </tr>
                              <tr>
                                   <td>#1671</td>
                                   <td>22 Novembre 2022</td>
                                   <td>27 Novembre 2022</td>
                                   <td>Livrer</td>
                                   <td>10 000 FCFA</td>
                                   <td className='voir_commande'>
                                        <Link to="" className='lien_voir'><img src={Voir} alt="" /></Link>
                                   </td>
                              </tr>
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default CommandeUser;