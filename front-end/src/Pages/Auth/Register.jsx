import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Users/Navbar';
// import swal from 'sweetalert';
import "../../Styles/User/Register.css"
import axios from "axios"

const Register = () => {

     const pseudoRef = useRef()
     const emailRef = useRef()
     const passwordRef = useRef()

     const [errors, setErros] = useState([])
     const navigate = useNavigate();
     // const [token, setToken] = useState()
     useEffect(() => {

          let token = localStorage.getItem("auth_token")

          if(token) {

               navigate("/")
          }
     }, [])

     const register = async (e) => {

          e.preventDefault()
          const pseudo = pseudoRef.current.value
          const email = emailRef.current.value
          const password = passwordRef.current.value

          axios.get('/sanctum/csrf-cookie').then() 
               try {
                    const response = await axios.post("api/register", {pseudo: pseudo, email: email, password: password })

                    if(response.data.status === 200) {

                         // swal("Sucess", response.data.message)    
                         navigate("/login")

                    } else if(response.data.status === 422) {
                         
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
                              <h2>Inscription</h2>
                         </div> 
                         <div className="formulaire">    
                              <form action="" onSubmit={register}>
                                   <input type="text" ref={pseudoRef} name="" placeholder='Enter votre pseudo' />
                                 
                                        { errors?.pseudo && (<span>{errors?.pseudo}</span>)}
                                      
                                   <input type="email" name="" ref={emailRef} placeholder='Entrer votre e-mail' />
                                 
                                        { errors?.email && (<span>{errors?.email}</span>)}
                             
                                   <input type="password" name="" ref={passwordRef} placeholder='Entrer votre mot de passe'/>
                                
                                        
                                        { errors?.password && (<span>{errors?.password}</span>)}
                                   
                                   <button>S'enregister</button>
                              </form>
                         </div>
                         <Link to="/login" className='loginbtn'>Se connecter</Link>
                    </div>
               </div>
          </div>
     );
};

export default Register;