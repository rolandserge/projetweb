import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../../Component/Users/Navbar';
// import swal from 'sweetalert';
import { useRef } from 'react';
import axios from "axios"
// import Register from './Register';

const Login = ({modal}) => {

     const navigate = useNavigate();
     const emailRef = useRef()
     const passwordRef = useRef()
     const [errors, setErros] = useState([])
     // const [register, setRegister] = useState(false)

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
                         navigate('/admin/index')
                         
                    } 
               } else if(response.data.status === 401) {
                    
                    // swal("Error", response.data.message)
                    
               } else if(response.data.status == 422){
                    
                    setErros(response.data.error)
               }    
           } catch (error) {
                console.log(error)
           } 
     }
     return (
          <div>
               {/* <Navbar /> */}
               <div className="fonds">
                    <div className="formulaires">
                         <div className='entete'>
                              <Link to='/'>Home</Link>
                              <button onClick={modal}>X</button>
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
                         {/* <Link to="/register" className='loginbtn'>S'enregister</Link> */}
                         {/* <button className='loginbtn' onClick={() => setRegister(true)}>S'inscrire</button> */}
                         {/* <Register open={register} modal={() => setRegister(false)} /> */}
                    </div>
               </div>
          </div>  
     );
};

export default Login;