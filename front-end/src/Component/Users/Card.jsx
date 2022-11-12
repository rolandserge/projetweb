import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

const Card = () => {
     
     const [tableaux, setTableaux] = useState([])
     
     useEffect(() => {
          (async function () {
               try {
                   const response = await axios.get("/api/user/get-product");
                 
                    if(response.data.status === 200) {

                         setTableaux(response.data.tableaux)
                    }
               } catch (error) {
                   console.log(error);
               }
           })();
     }, [])

     return (
          <>
           <div className='cards' >
               {
                    tableaux.map((table) => {
                         return (
                             
                                   <div className="card" key={table.id}>
                                        <div className="image">
                                             <img src={`http://127.0.0.1:8000/${table.Image_Tableau}`} alt={table.Name_Tableau} />
                                        </div>
                                        <div className="infos">
                                             <Link to={`/detail-tableau/${table.id}`} className='nom'><p>{table.Name_Tableau}</p></Link>
                                             <Link to={`/detail-tableau/${table.id}`} className='prix'>{table.Prix_Tableau} FCFA</Link>
                                        </div>
                                   </div>
                            
                         )
                    })
               }
               </div>
          </>
     );
};

export default Card;