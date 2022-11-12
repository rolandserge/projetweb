import React, {useEffect, useRef} from 'react';
import "../../../Styles/Admin/Add_product.css"
import { useState } from 'react';
import swal from "sweetalert";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

const AddProduct = () => {

     const navigate = useNavigate()

     useEffect(() => {

          var token = localStorage.getItem("auth_token");

          if(!token) {

               swal("Veillez vous connecter")
               navigate("/login")
          } 
     }, [navigate])

     const [category, setCategory] = useState([])

     // const [image, setImage] = useState("")
     const [error, setError] = useState([])

     // const addimage = (e) => {

     //      const reader = new FileReader()

     //      if(e.target.files[0]) {

     //           reader.readAsDataURL(e.target.files[0])
     //      }
     //      reader.onload = (event) => {

     //           setImage(event.target.result)
     //      }
     // }
     
     const nameRef = useRef()
     const artisteRef = useRef()
     const categoryRef = useRef()
     const statusRef = useRef()
     const formatRef = useRef()
     const couleurRef = useRef()
     const prixRef = useRef()
     const imageRef = useRef()
     const largeurRef = useRef()
     const hauteurRef = useRef()
     const descriptionRef = useRef()

      //afficher toutes les categories
     
      useEffect(() => {
           
          (async function () {
               try {
                   const response = await axios.get("/api/admin/get-category-partial");

                   if(response.data.status === 200) {

                         setCategory(response.data.category)

                    } else if (response.data.status === 404) {
                         
                         swal("Error",response.data.message)
                    }
               } catch (error) {
                    console.log(error);
               }
          })();

     }, [])
     

     const Addproduct = async (e) => {

          e.preventDefault()

          const formData = new FormData();

          const name = nameRef.current.value
          const artiste = artisteRef.current.value
          const status = statusRef.current.value
          const prix = prixRef.current.value
          const largeur = largeurRef.current.value
          const hauteur = hauteurRef.current.value
          const couleur = couleurRef.current.value
          const format = formatRef.current.value
          const image = imageRef.current.files[0]
          const category = categoryRef.current.value
          const description = descriptionRef.current.value

          formData.append("Name_Tableau", name)
          formData.append("Name_Artiste", artiste)
          formData.append("Status_Tableau", status)
          formData.append("Prix_Tableau", prix)
          formData.append("Largeur_Tableau", largeur)
          formData.append("Hauteur_Tableau", hauteur)
          formData.append("Couleur_Tableau", couleur)
          formData.append("Format_Tableau", format)
          formData.append("Image_Tableau", image)
          formData.append("categorie_id", category)
          formData.append("Description_Tableau", description)
          formData.append('_method', 'POST');

          try {
               // {category_id : category_id, slug: slug, name : name, prix : prix, prixbas : prixbas, quantite : quantite, image : image, description: description }
               const response = await axios.post("/api/admin/add-product", formData)
                
               // console.log(response.data)
               if(response.data.status === 200) {

                    swal("Success",response.data.message)
                    document.getElementById('form').reset();
                    setError([])

               } else if(response.data.status === 422) {

                    swal("Error",response.data.message)
               
                    setError(response.data.error)
               }
                
            } catch (error) {
    
                console.log(error);
            }

     }
   
     return (
          <div>
              <div>
                    <form action="" className='form_product' encType='multipart/forma-data' id='form' onSubmit={Addproduct}>
                      
                         <div className="form_data">
                              <div className='titre_add'>
                                  Ajouter un nouveau tableau 
                              </div>
                              <div>
                                   <div className='name_tableau'>
                                        <label htmlFor="">Entrer le nom du tableau</label>
                                        <input type="text" ref={nameRef} placeholder='Entrer le nom du produit' />
                                        {
                                             error.Name_Tableau ? <span>{error.Name_Tableau}</span> : ""
                                        }
                                   </div>
                                   <div className='name_tableau'>
                                        <label htmlFor="">Entrer le nom de l'artiste</label>
                                        <input type="text" ref={artisteRef} placeholder="Entrer le nom de l'artiste" />
                                        {
                                             error.Name_Artiste ? <span>{error.Name_Artiste}</span> : ""
                                        }
                                   </div>
                              </div>     
                              <div className='form_1'>
                                   <div>
                                        <label htmlFor="">Choisissez la categorie</label>
                                        <select name="" id="" ref={categoryRef}>
                                             {
                                                  category.map((categorie) => {
                                                       return (

                                                            <option key={categorie.id} value={categorie.id}>{categorie.Name_category}</option>
                                                       )
                                                  })
                                             }
                                        </select>
                                   </div>
                                   <div> 
                                        <label htmlFor="">Choisissez le status</label>
                                        <select name="" id="" ref={statusRef}>
                                             <option value="Afficher">Afficher</option>
                                             <option value="Masquer">Masquer</option>
                                             <option value="Neutre">Neutre</option>
                                        </select>
                                   </div>
                              </div>
                              <div className='form_2'>                       
                                   <div>
                                        <label htmlFor="">Prix du tableau</label>
                                        <input type="number" ref={prixRef} placeholder='Entrer le prix du tableau'/>
                                        {
                                             error.Prix_Tableau ? <span>{error.Prix_Tableau}</span> : ""
                                        }
                                   </div>
                                   <div>
                                        <label htmlFor="">Largeur du tableau</label>
                                        <input type="number" ref={largeurRef} placeholder='Entrer le prix du tableau'/>
                                        {
                                             error.Largeur_Tableau ? <span>{error.Largeur_Tableau}</span> : ""
                                        }
                                   </div>
                                   <div>
                                        <label htmlFor="">Hauteur du tableau</label>
                                        <input type="number" ref={hauteurRef} placeholder='Entrer le prix du tableau'/>
                                        {
                                             error.Hauteur_Tableau ? <span>{error.Hauteur_Tableau}</span> : ""
                                        }
                                   </div>
                                   <div>
                                        <label htmlFor="">Choisissez l'image</label>
                                        <input type="file" accept="image/*" name='Image_Tableau'ref={imageRef} />
                                        {
                                             error.Image_Tableau ? <span>{error.Image_Tableau}</span> : ""
                                        }
                                   </div>
                                   <div>
                                        <label htmlFor="">Entrer le format</label>
                                        <input type="text" ref={formatRef} placeholder='Entrer le format' />
                                        {
                                             error.Format_Tableau ? <span>{error.Format_Tableau}</span> : ""
                                        }
                                   </div>
                                   <div>
                                        <label htmlFor="">Entrer la couleur</label>
                                        <input type="text" ref={couleurRef} placeholder='Entrer la couleur' />
                                        {
                                             error.Couleur_Tableau ? <span>{error.Couleur_Tableau}</span> : ""
                                        }
                                   </div>
                              </div>
                              <div className='long_texte'>
                                   <label htmlFor="">Entrer la description</label>
                                   <textarea name="description" id="" ref={descriptionRef} placeholder='Entrer la description du tableau' cols="50" rows="7"></textarea>
                                   {
                                        error.Description_Tableau ? <span>{error.Description_Tableau}</span> : ""
                                   }
                              </div>
                         </div>
                         <div className="form_image">
                             {/* {
                                  image ?  <div className="image1">
                                             <img src={image} alt=""/>
                                        </div> : "Image pas encore choisi"
                             } */}
                               
                                  <div className="image1">
                                             
                                   </div>
                          
                              <div className='btn_add'>
                                   <div className="annuler">
                                        <Link to="/admin/product/view-product">Annuler</Link>
                                   </div>
                                   <button>Ajouter le tableau</button>
                              </div>
                         </div>
                    </form>
              </div>
          </div>
     );
};

export default AddProduct;