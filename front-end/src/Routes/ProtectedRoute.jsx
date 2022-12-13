import React, {useState, useEffect} from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import Login from '../Pages/Auth/Login';

const ProtectedRoute = () => {

     const [auth, setAuth] = useState(true)
     const [login, setLogin] = useState(true)
     // const Navigate = useNavigate()
     useEffect(() => {

         const token = localStorage.getItem('auth_token')

         if(token){

              return setAuth(true)
               
         } else {

              return setAuth(false)
         }
         })

      return auth ? <Outlet /> : <Login modal={setLogin} />
};

export default ProtectedRoute;