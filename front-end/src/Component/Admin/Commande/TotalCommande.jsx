import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const TotalCommande = () => {

     const {id} = useParams()

     const [produits, setProduits] = useState([])


     useEffect(() => {
          (async function () {

               try {
                   const response = await axios.get(`/api/admin/get-commandes/detail-commande/${id}`);
                 
                    if(response.data.status === 200) {

                         setProduits(response.data.produits)
                         // console.log(response.data.produits)
                    }
               } catch (error) {

                   console.log(error);
               }
           })();
     }, [])

     return (
          <div>
               <div>
                    <p>Dashbord / Commande / voir-commande / Total-commande</p>
               </div>
               
               <div className="category_div">
                    
                    <div className="category_element">
                         <div className='cat_titre'>
                              Liste des produits de la commande
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
                         <div className="add_new">
                              <Link to="/admin/commande/view-commandes" className='add_lien'>Les commandes</Link>
                         </div>
                    </div>
                    <div className="category_liste">
                         <table className='table'>
                              <thead>
                                   <tr>
                                        {/* <th className='id_commande'>Id commande</th>
                                        <th className='image_prod'>Image</th>
                                        <th className='date_commande'>Nom du tableau</th>
                                        <th className='date_livraison'>Prix</th>
                                        <th className='status_commande'>quantite</th>
                                        <th className='total_commande'>Total</th> */}
                                        <th>Id commande</th>
                                        <th>E-mail</th>
                                        <th>Telephone</th>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Ville</th>
                                        <th>Commune</th>
                                        <th>Payement</th>
                                   </tr>
                              </thead>
                              <tbody className='tbody'>                    
                                   <tr>
                                        <td><span>#1</span></td>
                                        <td>sergeroland.komenan@gmail.com</td>
                                        <td>07 07 07 07 07</td>
                                        <td>Komenan</td>
                                        <td>Serge-Roland</td>
                                        <td>Abidjan</td>
                                        <td>Yopougon</td>
                                        <td>Cash</td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
                    <div className="category_liste">
                         <table className='table'>
                              <thead>
                                   <tr>
                                        <th className='id_commande'>Id</th>
                                        <th className='image_commande'>Image</th>
                                        <th className='date_commande'>Nom du tableau</th>
                                        <th className='date_livraison'>Prix</th>
                                        <th className='status_commande'>quantite</th>
                                        <th className='total_commande'>Total</th>
                                   </tr>
                              </thead>
                              <tbody className='tbody'>
                                   {
                                        produits.sort((a, b) => a.id < b.id ? 1 : -1).map((produit) => {
                                             
                                             return (

                                                  <tr key={produit.product.id}>
                                                       <td><span>#</span> {produit.id}</td>
                                                       <td>
                                                            <div className='image_div_commande'>
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
                                   }
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default TotalCommande;