import React, {useState, useEffect} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
    
     const [auth, setAuth] = useState(false)

      useEffect(() => {

          const token = localStorage.getItem('auth_token')

          if(token){

               return setAuth(true)

          } else {

               return setAuth(false)
          }
          })
	
	  return auth ? <Navigate to="/"/> : <Outlet/>
};

export default PublicRoute;