import React from 'react';
import Navbar from '../../Component/Users/Navbar';

const Payement = () => {
     return (
          <div>
               <Navbar />
              <div>

              </div>
              <form action="">
                    <div>
                         <div>

                              <label htmlFor="">Choississez votre ville</label>
                              <select name="" id="">
                                   <option value="">Abidjan</option>
                                   <option value="">Yakro</option>
                              </select>
                         </div>
                         <div>

                              <label htmlFor="">Choississez votre commune</label>
                              <select name="" id="">
                                   <option value="">Koumassi</option>
                                   <option value="">Marcory</option>
                                   <option value="">Port-bouet</option>
                                   <option value="">Yopougon</option>
                                   <option value="">Adjame</option>
                                   <option value="">Cocody</option>
                                   <option value="">Plateau</option>
                                   <option value="">Abobo</option>
                                   <option value="">Treichville</option>
                                   <option value="">Bassam</option>
                              </select>
                         </div>
                         <div>
                              <label htmlFor="">Entrer le lieu de livraison</label>
                              <input type="text" name="" id="" placeholder='Ex: Remblais / Terminus 03' />
                         </div>
                         <div>
                              <label htmlFor="">Entrer votre numero de telephone</label>
                              <input type="text" name="" id="" placeholder='Ex: 07 65 55 66 54 / 05 56 65 13 78' />
                         </div>
                    </div>
                    <div>
                         <button>Payer en ligne</button>
                         <button>Payer a la livraison</button>
                    </div>
              </form>
          </div>
     );
};

export default Payement;
