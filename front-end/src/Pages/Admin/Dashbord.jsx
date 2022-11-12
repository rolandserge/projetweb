import React, {useEffect, useState} from 'react';
import "../../Styles/Admin/Dashbord.css"
import Navbar from '../../Component/Users/Navbar';
import Aside from '../../Component/Admin/Aside';
import { Outlet} from 'react-router-dom';
import swal from "sweetalert"
import {useNavigate} from "react-router-dom"

const Dashbord = () => {

     const [token, setToken] = useState(localStorage.getItem("auth_token"))
     const navigate = useNavigate()

     useEffect(() => {

          // var token = localStorage.getItem("auth_token");

          if(!token) {

               swal("Veillez vous connecter")
               navigate("/login")
          } 
     }, [token])

     return (
          <div>
               <header>
                 <Navbar />
               </header>
               <main>
                    <aside>
                         <Aside />
                    </aside>
                    <section>
                       <Outlet />
                    </section>
               </main>
          </div>
     );
};
export default Dashbord;