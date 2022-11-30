import React from 'react';
import "../../../Styles/User/Profil/VoirProfil.css"
import {Link} from 'react-router-dom'
const VoirProfil = () => {
     return (
          <div className='voirprofil'>
               <h3>Profil de l'utilisateur</h3>
               <div>
                    <p>Nom : le nom de utilisateur</p>
               </div>
               <div>
                    <p>Prenom : le prenom de l'utilisateur</p>
               </div>
               <div>
                    <p>E-mail : example@gmail.com</p>
               </div>
               <div>
                    <p>Numero : +255 07070707</p>
               </div>
               <div>
                    <p>Sexe : le sexe de l'utilisateur</p>
               </div>
               <div className='editerprofil'>
                    <Link className='lienediter' to="/mon-profil/editer-profil">Editer mon profil</Link>
               </div>
          </div>
     );
};

export default VoirProfil;