import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import Card from '../../Component/Users/Card';
import Navbar from '../../Component/Users/Navbar';
import "../../Styles/User/Payement.css"
import {clearCard } from '../../Redux/SystemPanier';

const Payement = () => {

     const {cards, totalAmont} = useSelector(item => item.panier)

     const dispatch = useDispatch()
     const navigate = useNavigate()

     useEffect(() => {
          
          if(cards.length  === 0 && localStorage.getItem('auth_token')) {

               navigate('/')

          } else if(cards.length === 0 && !localStorage.getItem('auth_token')) {

               navigate('/login')
          }

     }, [])
     
     const villes = [
          {
               nom : "abidjan",
               communes : [
                    "Koumassi",
                    // "Yopougon",
                    // "Plateau",
                    // "Marcory",
                    // "Port-Bouet",
                    // "Cocody",
                    // "Treichville",
                    // "Adjame",
                    // "Grand-Bassam",
                    // "Abobo"
               ]
          }
          ,
          {
               nom : "Yakro",
               communes :  [
                    "200 logement"  ,
                    // "Sopim",
                    // "Kokrenou",
                    // "Habitat",
                    // "Dioulabougou",
                    // "227 Logements",
               ]
          }
     ]
     const [villestate, setVillestate] = useState("Abidjan")
     const nomRef = useRef()
     const prenomRef = useRef()
     const lieuRef = useRef()
     const emailRef = useRef()
     const communeRef = useRef()
     const telephoneRef = useRef()

     const orders = async (e) => {
          
          e.preventDefault()
          const nom = nomRef.current.value
          const prenom = prenomRef.current.value
          const lieu = lieuRef.current.value
          const commune = communeRef.current.value
          const telephone = telephoneRef.current.value
          const email = emailRef.current.value
          
          const formData = new FormData()
          formData.append("nom", nom)
          formData.append("prenom", prenom)
          formData.append("commune", commune)
          formData.append("ville", villestate)
          formData.append("email", email)
          formData.append("telephone", telephone)
          formData.append("lieu_livraison", lieu)
          formData.append("panier", JSON.stringify(cards))
          formData.append("totalAmont", totalAmont)

          try {
               
               const response = await axios.post("/api/user/commande", formData)
                
               if(response.data.status === 200) {

                    // document.getElementById('form').reset();
                    // setError([])
                    console.log(response.data.message)
                    dispatch(clearCard())

                    navigate("/Finish")


               } else if(response.data.status === 201) {

                    console.log(response.data.message)
               }
                
            } catch (error) {
    
                console.log(error);
            }
     }

     return (
          <div>
               <Navbar />
              <div className='form_commande'>
                    <form action="" onSubmit={orders}>
                         <div className='titre_livraison'>
                              <h2>Informations de livraison</h2>
                         </div> 
                         <div>
                              <label htmlFor="">Choississez votre ville</label>
                              <select name="" id="" value={villestate} onChange={(e) => setVillestate(e.target.value)}>
                                   {
                                        villes.map((ville, index) => {

                                             return (

                                                  <option key={index} value={ville.nom}>{ville.nom}</option>
                                             )
                                        })
                                   }
                              
                              </select>
                         </div>
                         <div>
                              <label htmlFor="">Choississez votre commune</label>
                              <select name="" ref={communeRef} id="">
                                   {
                                        villes.filter((ville) => ville.nom.toLocaleLowerCase().includes(villestate.toLocaleLowerCase()))
                                        .map((ville, index) => {

                                             return (
                                                  
                                                  <option value={ville.communes} key={index}>{ville.communes}</option>
                                             )
                                        })
                                   }
                              </select>
                         </div>
                         <div>
                              <label htmlFor="">Entrer votre nom</label>
                              <input type="text" ref={nomRef} name="" id="" placeholder='Ex : Gadeu ' required />
                         </div>
                         <div>
                              <label htmlFor="">Entrer votre prenom</label>
                              <input type="text" name="" ref={prenomRef} id="" placeholder='Ex : Pierre Gadeu Jean Cravate' required />
                         </div>
                         <div>
                              <label htmlFor="">Entrer votre numero de telephone</label>
                              <input type="number" name="" ref={telephoneRef} id="" required placeholder='Ex: 0765556654 / 0556651378' />
                         </div>
                         <div className='email_livraison'>
                              <label htmlFor="">Entrer votre e-mail</label>
                              <input type="email" ref={emailRef} name="" id="" required placeholder='Ex: pierregadeu@gmail.com' />
                         </div>
                         <div className='textarea'>
                              <label htmlFor="">Entrer l'adresse de livraison</label>
                              <textarea name="" ref={lieuRef} required placeholder='Ex: Remblais / Terminus 03'></textarea>
                         </div>
                         <div className='boutton_commande'>
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
