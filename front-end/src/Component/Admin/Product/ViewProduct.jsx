import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../../Styles/Admin/ViewProduct.css"
import { useEffect } from 'react';
import Editer from "../../../Images/Admin/editer.png"
import Delete from "../../../Images/Admin/delete.png"
import axios from "axios";
import Statistique from '../Dashbord/Statistique';
// import swal from "sweetalert"

const ViewProduct = () => {

     const [product, setProduct] = useState([])

     useEffect(() => {

        
          (async function () {

               // document.title = "Voir Product"
               try {
                   const response = await axios.get("/api/admin/get-product");
                 
                    if(response.data.status === 200) {

                         setProduct(response.data.produit)
                    }
               } catch (error) {
                   console.log(error);
               }
           })();
     }, [])

     return (
          <div>
               <div>
                    Dashbord / Produits / view-produit
               </div>
               <Statistique />
               <div className="category_div">
                    <div className='cat_titre'>
                         Liste des articles
                    </div>
                    <div className="category_element">
                         <div className="category_nb">
                              <p>Afficher</p>
                              <select name="" id="">
                                   <option value="10">10</option>
                                   <option value="20">20</option>
                                   <option value="50">50</option>
                                   <option value="100">100</option>
                              </select>
                         </div>
                         <div className="category_search">
                              <input type="search" name="" id="" />
                              <button>Rechercher</button>
                         </div>
                         <div className="add_new">
                              <Link to="/admin/product/add-product" className='add_lien'>Nouveau tableau</Link>
                         </div>
                    </div>
                    <div className="category_liste">
                         <table className='table'>
                              <thead>
                                   <tr>
                                        <th className='id_product'>Id</th>
                                        <th className='image_prod'>Image</th>
                                        <th className='nom_product'>Nom</th>
                                        <th className='categorie_prod'>Categorie</th>
                                        <th className='prix_prod'>Prix</th>
                                        <th className='qtn_prod'>Qte</th>
                                        <th className='status_prod'>Status</th>
                                        <th colSpan="2" className='action_commande'>Action</th>
                                   </tr>
                              </thead>
                              <tbody className='tbody'>
                                   {
                                        product.map((produit) => {

                                             return (
                                                  
                                             <tr key={produit.id}>
                                                  <td># {produit.id}</td>
                                                  <td>
                                                       <div className='image_div'>
                                                            <img src={`http://127.0.0.1:8000/${produit.Image_Tableau}`} alt="" />
                                                       </div>
                                                  </td>
                                                  <td className='nom_prod'>{produit.Name_Tableau}</td>
                                                  <td>
                                                       {produit.categorie.Name_category}
                                                  </td>
                                                  <td>
                                                       {produit.Prix_Tableau.toLocaleString()} FCFA
                                                  </td>
                                                  <td>{produit.Quantite_Tableau}</td>
                                                  <td>{produit.Status_Tableau}</td>
                                                  <td className='voir_action'>
                                                       <div className="voir_btn">
                                                            <Link to="" className='lien_voir'><img src={Editer} alt="" /></Link>
                                                       </div>
                                                  </td>
                                                  <td className='editer_action'>
                                                       <button><img src={Delete} alt="" /></button>
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

export default ViewProduct;