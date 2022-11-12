import React from 'react';
import { useRef } from 'react';
import "../../../Styles/Admin/Add_Category.css"
import swal from 'sweetalert';
import axios from "axios"
import { useState } from 'react';

const AddCategory = () => {

     const nameRef = useRef()
     const statusRef = useRef()
     const descriptionRef = useRef()

     const [error, setError] = useState()

     const NewCategory = async (e) => {

          e.preventDefault()

          const Name_category = nameRef.current.value
          const Status_category = statusRef.current.value
          const Description_category = descriptionRef.current.value
          
          // console.log(name)

          try {

               const response = await axios.post("/api/admin/add-category", {Name_category : Name_category, Status_category : Status_category, Description_category : Description_category})
               // const response = await axios.patch(`/api/update-product/${id}`, {category_id : category_id, slug: slug, name : name, prix : prix, prixbas : prixbas, quantite : quantite, image : image, description: description })
                    
                    if(response.data.status === 200) {
     
                         swal("Success",response.data.message)
                         document.getElementById('form').reset();
                         // navigate("/admin/view-product");
                            
                    } else if (response.data.status === 422) {
     
                         swal('Error', response.data.message)
                         setError(response.data.error)
                         
     
                    }  else if(response.data.status === 405) {
     
                         swal("Error", response.data.message);
                       }
          } catch (error) {
     
               console.log(error);
          }
     }
     return (
          <div>
               <div className="form_category">
                    <form action="" className='formulaire_category' onSubmit={NewCategory} id="form">
                         <div className='titre_add'>
                              Ajouter une nouvelle categorie
                         </div>
                         <div className='nom_tableau'>
                              <label htmlFor="">Entrer le nom du tableau</label>
                              <input type="text" name='' ref={nameRef} placeholder='Entrer le nom de la categorie' />
                              <div>
                                   { error?.Name_category && (<span>{error?.Name_category}</span>)}
                              </div>
                         </div>
                         <div className='status_form'>
                              <label htmlFor="">Choissez le status</label>
                              <select name="status" id="" ref={statusRef}>
                                   <option value="Afficher">Afficher</option>
                                   <option value="Masquer">Masquer</option>
                                   <option value="Neutre">Neutre</option>
                              </select>
                              <div>
                                   { error?.Status_category && (<span>{error?.Status_category}</span>)}
                              </div>
                         </div>
                         <div className='long_text'>
                              <label htmlFor="">Entrer la description</label>
                              <textarea name="description" ref={descriptionRef} id="" placeholder='Entrer la description de la categorie' cols="50" rows="7"></textarea>
                              <div>
                                   { error?.Description_category && (<span>{error?.Description_category}</span>)}
                              </div>
                         </div>
                         <div className='button_add'>
                              <button>Ajouter la categorie</button>
                         </div>
                    </form>
              </div>
          </div>
     );
};

export default AddCategory;