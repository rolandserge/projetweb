import React, {useState, useEffect} from 'react';
import { Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = () => {

     const [auth, setAuth] = useState(true)
     // const Navigate = useNavigate()
     useEffect(() => {

         const token = localStorage.getItem('auth_token')

         if(token){

              return setAuth(true)
               
         } else {

              return setAuth(false)
         }
         })

      return auth ? <Outlet /> : <Navigate to="/login"/>
};

export default ProtectedRoute;