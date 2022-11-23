import React from 'react';

const Statistique = () => {
     return (
          <>
            <div className='statistiques'>
                    <div className='statistique_1'>
                         <div>
                             <p> Commande en attente</p>
                         </div>
                         <div>
                              <h3>10</h3>
                         </div>    
                    </div>
                    <div className='statistique_2'>
                         <div>
                              <p>Commande annulée</p>
                         </div>
                         <div>
                              <h3>10</h3>
                         </div>
                    </div>
                    <div className='statistique_3'>
                         <div>
                              <p>Commande valider</p>
                         </div>
                         <div>
                              <h3>10</h3>
                         </div>
                    </div>
                    <div className='statistique_4'>
                         <div>
                              <p>Revenu du jour</p>
                         </div>
                         <div>
                              <h3>100 000 000 FCFA</h3>
                         </div>
                    </div>
               </div>   
          </>
     );
};

export default Statistique;