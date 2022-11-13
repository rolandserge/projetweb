import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Tableaux = () => {

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
          <div className='cards'>
               {
                    tableaux.map((table, index) => {
                         return (
                         <Card key={index} table={table} />
                         )
                    })
               }
          </div>
     );
};

export default Tableaux;