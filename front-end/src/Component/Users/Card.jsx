import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/User/Card.css"
const Card = ({ table }) => {
     
     return (  
          <Link to={`/detail-tableau/${table.id}`} className='card'>                
               {/* <div className="card"> */}
                    <div className="image">
                         <img src={`http://127.0.0.1:8000/${table.Image_Tableau}`} alt={table.Name_Tableau} />
                    </div>
                    <div className="infos">
                         <p className='nom'>{table.Name_Tableau}</p>
                         <p className='prix'>{table.Prix_Tableau.toLocaleString()} FCFA</p>
                    </div>
               {/* </div> */}
          </Link>       
     );
};

export default Card;