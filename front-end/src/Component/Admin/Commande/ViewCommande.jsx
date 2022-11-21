import React from 'react';
import Editer from "../../../Images/Admin/editer.png"
import Voir from "../../../Images/Admin/voir.png"

const ViewCommande = () => {

     const [commandes, setCommandes] = useState([])

     useEffect(() => {
          (async function () {

               try {
                   const response = await axios.get("/api/admin/get-commandes");
                 
                    if(response.data.status === 200) {

                         setCommandes(response.data.categories)
                    }
               } catch (error) {
                    
                   console.log(error);
               }
           })();
     }, [])

     return (
          <div>
               <div>
                    Menu / Commande / voir-commande
               </div>
               <div className="category_div">
                    <div className='cat_titre'>
                         Liste commande
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
                                        <th className='id_category'>Id commande</th>
                                        <th className='nom_category'>Lieu de livraison</th>
                                        <th className='nom_category'>Date de la commande</th>
                                        <th className='nom_category'>Date de livraison</th>
                                        <th className='status_cat'>Status</th>
                                        <th className='status_cat'>Total</th>
                                        <th colSpan="2" className='action_button'>Action</th>
                                   </tr>
                              </thead>
                              <tbody className='tbody'>
                                   {
                                        commandes.map((commande) => {
                                             
                                             return (

                                                  <tr key={commande.id}>
                                                       <td><span>#</span> {commande.id}</td>
                                                       <td className='nom_cat'>{commande.lieu_livraison}</td>
                                                       <td className='nom_cat'>{commande.created_at}</td>
                                                       <td className='nom_cat'>{commande.date_livraison}</td>
                                                       <td className='nom_cat'>{commande.total_commande}</td>
                                                       <td>{commande.status}</td>
                                                       <td>
                                                            <div className="modifier_btn">
                                                                 <Link to="" className='modifier_cat'><img src={Voir} alt="" /></Link>
                                                            </div>
                                                       </td>
                                                       <td>
                                                            <button><img src={Editer} alt="" /></button>
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