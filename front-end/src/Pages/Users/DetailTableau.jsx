import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AddCard } from '../../Redux/SystemPanier';
import Navbar from '../../Component/Users/Navbar';
import Add from "../../Images/add.png"
import "../../Styles/User/DetailTableau.css"
import swal from "sweetalert"
import axios from "axios"
import { useDispatch } from 'react-redux';

const DetailTableau = () => {

     const {id} = useParams()
     const navigate = useNavigate()
     const dispatch = useDispatch()

     const [tableau, setTableau] = useState({})
     
     const [isloading, setIsloading] = useState(true)


     const addcard = (produit) => {

          if(localStorage.getItem("auth_token")) {

               dispatch(AddCard(produit))
               navigate("/panier")

          } else {
               
               navigate("/login")
          }
     }

     useEffect(() => {
        
               const fetchcategorie = async() => { 

                    try {
                         const {data } = await axios.get(`/api/user/detail-product/${id}`);

                          if(data.status === 200) {
               
                              setTableau(data.produit)
                               setIsloading(false)
          
                          } else if(data.status === 400) {
          
                               swal("Error", data.error)
                               navigate("/")
          
                          } else if(data.status === 420) {
          
                               swal("Error", data.error)
                               navigate("/")
                          }
                     } catch (error) {
          
                         console.log(error);
                 
                     }
                }
          
          fetchcategorie()
     }, [id, navigate])
     return (
          <>
               <Navbar />

               <div className="detail_container">
                    <div className='lien_div'>
                         <Link to="/" className='lien'>Acceuil</Link> / <Link className='lien'>{ isloading ? '' : tableau.categorie.Name_category}</Link> <span>/</span> <Link className='lien'>{isloading ? '' : tableau.Name_Tableau}</Link>
                    </div>
                    <div className='containers_div'>
                         <div className='div_nom_cat'>
                              <p>{isloading ? '' : tableau.categorie.Name_category} {isloading ? '' : tableau.Couleur_Tableau} <span>:</span>  {isloading ? '' : tableau.categorie.Description_category}</p>
                         </div>
                         <div className='Tableau_element'>
                              <div className='Tableau_div'>
                                   <div className='Tableau_image'>
                                        {isloading ? '' : <img src={`http://127.0.0.1:8000/${tableau.Image_Tableau}`} alt="" /> }
                                   </div>
                                   <div className='Tableau_dimension'>
                                        <p>Dimension du tableau {isloading ? '' : tableau.Largeur_Tableau} <span>cm x</span> {isloading ? '' : tableau.Hauteur_Tableau} <span>cm</span> </p>
                                   </div>
                              </div>
                              <div className='Tableau_infos'>
                                   <div>
                                        <h3>{isloading ? '' : tableau.Name_Tableau}</h3>
                                   </div>
                                   <div>
                                        <p className='description_p'>
                                             {isloading ? '' : tableau.Description_Tableau}
                                        </p>
                                   </div>
                                   <div>
                                        <p className='prix_tableau_p'>{isloading ? '' : tableau.Prix_Tableau} <span>FCFA</span></p>
                                        
                                         {/* {isloading ? '' : tableau.Prix_Tableau} */}
                                   </div>
                                   <div className='Tableau_panier'>
                                       <div className="Image_panier">
                                             <img src={Add} alt="" />
                                       </div>
                                       <div className="btn_panier">
                                             <button onClick={() => addcard(tableau)}>Ajouter au panier</button>
                                       </div>
                                   </div>
                                   <div>
                                        <ul>
                                             <li>* Payement securise</li>
                                             <li>* Livraison assurée dans le temps</li>
                                             <li>* Les oeuvres uniques</li>
                                             <li>* Les peintres profesionnels a la confection de vos tableaux </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div>
                    <div>
                         <p className='fiche_technique'>Fiche technique du tableau choisi</p>
                    </div>
                    <div className='tables_div'>
                         <table className='tables'>
                              <thead>
                                   <tr>
                                        <th>Elements</th>
                                        <th>Valeurs</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr>
                                        <td>Nom de l'artiste</td>
                                        <td>{isloading ? '' : tableau.Name_Artiste}</td>
                                   </tr>
                                   <tr>
                                        <td>Largeur du tableau</td>
                                        <td>{isloading ? '' : tableau.Largeur_Tableau} <span>cm</span></td>
                                   </tr>
                                    <tr>
                                        <td>Hauteur du tableau</td>
                                        <td>{isloading ? '' : tableau.Hauteur_Tableau} <span>cm</span></td>
                                   </tr>
                                   <tr>
                                        <td>Couleur du tableau</td>
                                        <td>{isloading ? '' : tableau.Couleur_Tableau}</td>
                                   </tr>
                                   <tr>
                                        <td>Format du tableau</td>
                                        <td>{isloading ? '' : tableau.Format_Tableau}</td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </>
     );
};

export default DetailTableau;