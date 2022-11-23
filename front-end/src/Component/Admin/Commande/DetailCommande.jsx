import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailCommande = () => {

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
                    <p>Dashbord / Commande / voir-commande / detail-commande</p>
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
                                        <th className='id_commande'>Id</th>
                                        <th className='image_prod'>Image</th>
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
                                   }
                              </tbody>
                         </table>
                    </div>
               </div>
               <div className='modifier_commande'>
                    <form action="" className='form_modifier_commande'>                       
                         <div>
                              <label htmlFor="">La date de livraison</label>
                              <input type="date"/>
                         </div>
                         <div>
                              <label htmlFor="">Choississez le status de la commande</label>
                              <select name="" id="">
                                   <option value="">Livrer</option>
                                   <option value="">Annuler</option>
                                   <option value="">En cours</option>
                              </select>
                         </div>
                         <div className='button_commande'>
                              <button>Modifier la commande</button>
                         </div>
                    </form>       
               </div>
          </div>
     );
};

export default DetailCommande;