import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import swal from "sweetalert"

const Bord = () => {

     // const navigate = useNavigate()

     // useEffect(() => {

     //      var token = localStorage.getItem("auth_token");

     //      if(!token) {

     //           swal("Veillez vous connecter")
     //           navigate("/login")
     //      } 
     // }, [])

     return (
          <div>
               <h2>Ma page dashbord</h2>
          </div>
     );
};

export default Bord;