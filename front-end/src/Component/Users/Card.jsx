import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/User/Card.css"
const Card = ({ table }) => {
     
     return (                     
          <div className="card">
               <div className="image">
                    <img src={`http://127.0.0.1:8000/${table.Image_Tableau}`} alt={table.Name_Tableau} />
               </div>
               <div className="infos">
                    <Link to={`/detail-tableau/${table.id}`} className='nom'><p>{table.Name_Tableau}</p></Link>
                    <Link to={`/detail-tableau/${table.id}`} className='prix'>{table.Prix_Tableau.toLocaleString()} FCFA</Link>
               </div>
          </div>                  
     );
};

export default Card;