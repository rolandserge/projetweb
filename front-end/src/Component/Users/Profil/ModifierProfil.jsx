import React from 'react';
import { Link } from 'react-router-dom';


const ModifierProfil = () => {
     
     return (
          <>
               <form action="">
                    <div className='form_titre'>
                         <h3>Editer mon profile</h3>
                    </div>
                    <div>
                         <label>Nom</label>
                         <input type="text" />
                    </div>
                    <div>
                         <label htmlFor="">Prenom</label>
                         <input type="text" />
                    </div>
                    <div>
                         <label htmlFor="">Numero de telephone</label>
                         <input type="number" name="" id="" />
                    </div>
                    <div>
                         <label htmlFor="">Adresse E-mail</label>
                         <input type="email" name="" id="" />
                    </div>
                    <div>
                         <label htmlFor="">Entrer votre genre</label>
                         <select name="" id="">
                              <option value="">-- select sexe --</option>
                              <option value="Masculin">Masculin</option>
                              <option value="Femme">Femenin</option>
                         </select>
                    </div>
                    <div className='submit_button'>
                         <Link to="/mon-profil" className='retour'>Annuler</Link>
                         <button>Enregister</button>
                    </div>
               </form>
          </>
     );
};

export default ModifierProfil;