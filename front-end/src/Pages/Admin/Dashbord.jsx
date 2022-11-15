import React from 'react';
import "../../Styles/Admin/Dashbord.css"
import Navbar from '../../Component/Users/Navbar';
import Aside from '../../Component/Admin/Aside';
import { Outlet} from 'react-router-dom';
// import swal from "sweetalert"


const Dashbord = () => {

     return (
          <div>
               <main>
                    <aside>
                         <Aside />
                    </aside>
                    <section>
                         <Navbar />
                       <Outlet />
                    </section>
               </main>
          </div>
     );
};
export default Dashbord;