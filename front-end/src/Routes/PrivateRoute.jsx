import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { Navigate, Outlet} from 'react-router-dom';
import Login from '../Pages/Auth/Login';
// import swal from 'sweetalert';

const PrivateRoute = () => {

     const [auth, setAuth] = useState(false)
     const [au, setAu] = useState()
     const [login, setLogin] = useState(false)

     useEffect(() => {

          axios.get('/api/authentifier').then(res => {

               if(res.data.status === 200) {

                    setAuth(true)
                   
               }
          })
     })

     axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {

          if(err.response.status === 401) {

               console.log("Veillez vous connecter")
               setAuth(false)
               setAu(401)
               // swal('Error',"Veillez vous connecter")
          }
          return Promise.reject(err)
     })
     axios.interceptors.response.use(function(response) {

          return response
     },function (error) {

          if(error.response.status === 403) {

               console.log("Vous n'est pas autoriser")
               setAuth(false)
               setAu(403)
               // swal("Error", "Vous n'est pas autoriser")
          }
          return Promise.reject(error)
     }
     )

     var result = ""

     if(au == 403  && !auth) {

          // result = au ? <Outlet /> :  <Navigate to="/test" />
          
          // result = auth ? <Outlet /> : <Navigate to="/" />
          result = <Navigate to="/" />

     } else if (au == 401 && !auth) {
         
     //     result = auth ? <Outlet /> : <Navigate to="/connexion" /> 
          result = <Login modal={setLogin} />
           
               
          
          
     } else if(auth) {

          result =  <Outlet />
     }

     return (
     
          // auth ? <Outlet /> : au ? <Navigate to="/" /> : <Navigate to="/connexion" /> 
          // au ? <Outlet /> :  <Navigate to="/" />

          result
     
     )
};

export default PrivateRoute;