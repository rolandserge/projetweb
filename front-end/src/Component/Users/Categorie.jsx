import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Categorie = ({categories}) => {

     return (
          <>
            <div className="listes_categories">
               <>
                    <Link to="/" className={ location.pathname === `/` ? 'button active' : "button"}>Tout</Link>
               </>
                    {
                         categories.map((categorie, index) => {
                              return (
                                   <Link key={index} className={ location.pathname === `/categories/${categorie.Name_category}` ? 'button active' : "button"} to={`/categories/${categorie.Name_category}`}>{categorie.Name_category}</Link>
                              )
                         })
                    }
                    
          </div>   
          </>
     );
};

export default Categorie;