import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Users/Navbar';
import swal from 'sweetalert';
import { useRef } from 'react';
import axios from "axios"
const Login = () => {
     const navigate = useNavigate();
     const emailRef = useRef()
     const passwordRef = useRef()

     const [errors, setErros] = useState([])
     // const [error, setError] = useState()

     useEffect(() => {
          
          if(localStorage.getItem("auth_token")) {

               navigate("/")
          }
     }, [])
     

     const login = async (e) => {

          e.preventDefault()
          
          const email = emailRef.current.value
          const password = passwordRef.current.value
          axios.get('/sanctum/csrf-cookie').then()

          try {
               const response = await axios.post("/api/login", {email: email, password: password })
               
               if(response.data.status == 200) {

                    localStorage.setItem('auth_token', response.data.token)
                    localStorage.setItem('auth_name', response.data.name)
     
                    if(response.data.role === "user") {
     
                         navigate('/')
     
                    } else {
     
                         navigate('/admin/acceuil')
                    }
               
               } else if(response.data.status === 401) {
                    
                    swal("Error", response.data.message)
                    
               } else if(response.data.status == 422){
                    
                    setErros(response.data.error)
               }    
           } catch (error) {
                console.log(error)
           } 
     }
     return (
          <div>
               <Navbar />
               <div className="fonds">
                    <div className="formulaires">
                         <div>
                              <h2>Connexion</h2>
                         </div> 
                         <div className="formulaire">    
                              <form action="" onSubmit={login}>        
                                   <input type="email" ref={emailRef} name="name" placeholder='Entrer votre e-mail' />
                                   <div>
                                        { errors?.email && (<span>{errors?.email}</span>)}
                                   </div>
                                   <input type="password" ref={passwordRef} name="" placeholder='Entrer votre mot de passe'/>
                                   <div>
                                        { errors.password ? (<span>{errors?.password}</span>) : ""}
                                   </div>    
                                   <button>Se connecter</button>
                              </form>
                         </div>
                         <Link to="/register" className='loginbtn'>S'enregister</Link>
                    </div>
               </div>
          </div>  
     );
};

export default Login;