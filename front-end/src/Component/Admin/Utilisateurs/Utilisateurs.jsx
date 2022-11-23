import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Utilisateurs = () => {
     return (
          <>
               <div className="category_div">
                    <div className="category_element">
                         <div className='cat_titre'>
                              Liste des Utilisateurs
                         </div>
                         <div className="category_nb">
                              <p>Afficher</p>
                              <select name="" id="">
                                   <option value="">10</option>
                                   <option value="">20</option>
                                   <option value="">50</option>
                                   <option value="">100</option>
                              </select>
                         </div>
                         {/* <div className="add_new">
                              <Link to="/admin/commande/view-commandes" className='add_lien'>Les commandes</Link>
                         </div> */}
                    </div>
                    <div className="category_liste">
                         <table className='table'>
                              <thead>
                                   <tr>
                                        <th className='id_commande'>Id commande</th>
                                        <th className='total_commande'>pseudo</th>
                                        <th className='date_livraison'>E-mail</th>
                                        <th className='status_commande'>Nombre de commande</th>
                                        <th className='total_commande'>Nombre de produits</th>
                                   </tr>
                              </thead>
                              <tbody className='tbody'>
                                   {/* {
                                        produits.sort((a, b) => a.id < b.id ? 1 : -1).map((produit) => {
                                             
                                             return (

                                                  <tr key={produit.product.id}>
                                                       <td><span>#</span> {produit.id}</td>
                                                       <td>
                                                            <div className='image_div'>
                                                                 { <img src={`http://127.0.0.1:8000/${produit.product.Image_Tableau}`} alt="" /> ? <img src={`http://127.0.0.1:8000/${produit.product.Image_Tableau}`} alt="" /> : ""}
                                                            </div>
                                                       </td>
                                                       <td className='nom_prod'>{produit.product.Name_Tableau}</td>
                                                       <td>{produit.product.Prix_Tableau.toLocaleString()} <span>FCFA</span></td>
                                                       <td>{produit.qty}</td>
                                                       <td>{(produit.product.Prix_Tableau * produit.qty).toLocaleString()} <span>FCFA</span></td>
                                                  </tr>
                                             )
                                        })
                                   } */}

                                   <tr>
                                        <td><span># 101</span></td>
                                        <td>Admin pierre Gadeu</td>
                                        <td>sergeroland.komenan@gmail.com</td>
                                        <td>120</td>
                                        <td>200</td>
                                   </tr>
                                   <tr>
                                        <td><span># 101</span></td>
                                        <td>Admin pierre</td>
                                        <td>sergeroland.komenan@gmail.com</td>
                                        <td>120</td>
                                        <td>200</td>
                                   </tr>
                                   <tr>
                                        <td><span># 101</span></td>
                                        <td>Admin pierre</td>
                                        <td>sergeroland.komenan@gmail.com</td>
                                        <td>120</td>
                                        <td>200</td>
                                   </tr>
                                   <tr>
                                        <td><span># 101</span></td>
                                        <td>Admin pierre</td>
                                        <td>sergeroland.komenan@gmail.com</td>
                                        <td>120</td>
                                        <td>200</td>
                                   </tr>
                                   <tr>
                                        <td><span># 101</span></td>
                                        <td>Admin pierre</td>
                                        <td>sergeroland.komenan@gmail.com</td>
                                        <td>120</td>
                                        <td>200</td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </>
     );
};

export default Utilisateurs;