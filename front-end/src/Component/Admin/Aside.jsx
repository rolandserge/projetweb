import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/Admin/Aside.css"

const Aside = () => {

     const [open, setOpen] = useState(false)
     const [open1, setOpen1] = useState(false)
     const [open2, setOpen2] = useState(false)

     return (
          <div className='aside_container'>
          <div className='aside'>
               <div>
                    <Link to="/admin/index" className="lien">Dashbord</Link>
               </div>
               <div>
                    <Link to="/admin/commande/view-commandes" className="lien">Commandes</Link> 
              </div>
              <div>
               <div onClick={(e) => setOpen(!open)} className='click'> <div>Categorie</div><span>v</span></div>
                    {
                         open && (
                              <div className='content-item'>
                                   <Link to="/admin/category/view-category" className="lien">View category</Link>
                                   <Link to="/admin/category/add-category" className="lien">Add category</Link>
                              </div>
                         )
                    }
               </div>
              <div>
                    <div onClick={(e) => setOpen1(!open1)} className='click'>Produits <span>v</span></div>
                    {
                         open1 && (
                              <div className='content-item'>
                                   <Link to="/admin/product/view-product" className="lien">View product</Link>
                                   <Link to="/admin/product/add-product" className="lien">Add product</Link>
                              </div>
                         )
                    }
              </div>
              <div>
                    <div onClick={(e) => setOpen2(!open2)} className='click'>Utilisateurs <span>v</span></div>
                    {
                         open2 && (
                              <div className='content-item'>
                                   <Link to="/admin/utilisateurs/view-utilisateur" className="lien">View utilisateur</Link>
                                   <Link to="#" className="lien">Add utilisateur</Link>
                              </div>
                         )
                    }
              </div>
              <div>
                    <Link to="#" className="lien">Autres</Link>
              </div>
              <div>
                    <Link to="#" className="lien">Parametre</Link>
              </div>
          </div>
          </div>
     );
};

export default Aside;