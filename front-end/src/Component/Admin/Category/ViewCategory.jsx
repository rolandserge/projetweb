import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../Styles/Admin/view_category.css"
import axios from "axios"

const ViewCategory = () => {

     const [categorie, setCategorie] = useState([])

     useEffect(() => {
          (async function () {

               try {
                   const response = await axios.get("/api/admin/get-category");
                 
                    if(response.data.status == 200) {

                         setCategorie(response.data.categories)
                    }
               } catch (error) {
                   console.log(error);
               }
           })();
     }, [])

     return (
          <div>
               <div>
                    Menu / Category / view-category
               </div>
               <div className="category_div">
                    <div className='cat_titre'>
                         Liste des categories
                    </div>
                    <div className="category_element">
                         <div className="category_nb">
                              <p>Afficher</p>
                              <select name="" id="">
                                   <option value="">10</option>
                                   <option value="">20</option>
                                   <option value="">50</option>
                                   <option value="">100</option>
                              </select>
                         </div>
                         <div className="category_search">
                              <input type="search" name="" id="" />
                              <button>Rechercher</button>
                         </div>
                         <div className="add_new">
                              <Link to="/admin/category/add-category" className='add_lien'>Nouvelle categorie</Link>
                         </div>
                    </div>
                    <div className="category_liste">
                         <table className='table'>
                              <thead>
                                   <tr>
                                        <th className='id_category'>Id categorie</th>
                                        <th className='nom_category'>Nom de la categorie</th>
                                        <th className='status_cat'>Status categorie</th>
                                        <th colSpan="2" className='action_button'>Action</th>
                                   </tr>
                              </thead>
                              <tbody className='tbody'>
                                   {
                                        categorie.map((category) => {
                                             
                                             return (

                                                  <tr key={category.id}>
                                                       <td>#1</td>
                                                       <td className='nom_cat'>{category.Name_category}</td>
                                                       <td>{category.Status_category}</td>
                                                       <td>
                                                            <div className="modifier_btn">
                                                                 <Link to="" className='modifier_cat'>Modifier</Link>
                                                            </div>
                                                       </td>
                                                       <td>
                                                            <button>Supprimer</button>
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

export default ViewCategory;