import Axios, { AxiosHeaders } from 'axios'
import {useCookies} from 'react-cookie'
import React from 'react'
import './compte.css';
import { FcGoogle  } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Nav from '../navigation/nav';
import Validation from './validation';
import { useState } from "react";
import Dash from "../pageDash/dashbord/dash";
import { useNavigate } from "react-router-dom";
// import  Navigate from 'react-router-dom';




const Compte = () => {
  const [addclass, setaddclass] = useState("");
  const [values, setValues] = useState({
    userName: '',
    email: '',
    password: '',
    statue:'',
  })


  const [errors, setErrors] = useState({})


  const [signPassword, setSignPassword] = useState('')
  const [signEmail, setSignEmail] = useState('')

const changePassword = (e)=>{
  setSignPassword(e.target.value)
  
}
const changeEmail = (e)=>{
  setSignEmail(e.target.value)
  console.log(signEmail)

}

const [cookies, setCookies] = useCookies(["tak_tok"])

const navigate = useNavigate()


const handleSignin = async (e)=>{
  e.preventDefault()
  console.log(signEmail,signPassword)
  try{
     await Axios.post('http://localhost:3001/login',{ 
      email:signEmail, 
      password:signPassword
    }).then( (res)=>{ 
      console.log(res)
      setCookies("tak_tok",res.data[0].token)
      console.log({cookies})
      window.localStorage.setItem("userID",res.data[1].userID)

      if(cookies.tak_tok){
        navigate("../dash")
      }


    })
  }
  catch(err){
    console.log(err)
  }
}


  function handelInput(event){
    const newObj = {...values,[event.target.name]:event.target.value}
    console.log(newObj)
    setValues(newObj)
  } 

  function handleValidation(event){
    event.preventDefault();
    setErrors(Validation(values));

  }


  const handleSignup = (e)=>{

    Axios.post('http://localhost:3001/users',{
      username:values.userName , 
      email:values.email , 
      password:values.password , 
      status:values.statue
      
    })
    console.log('yes')

  }



  return (
  <>
    <div className='navigation'>
      <Nav/>      
    </div>
    <div className='body'>
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">


      <div className='signUp'>
           <h1>Create Account</h1>
           <div className='content'>
             <form onSubmit={handleValidation}>
               <div className='name'>
                <label>Username</label><br />
                 <input type="text" placeholder='Enter your @username' name="userName" onChange={handelInput}/>

                    {errors.userName && <p style={{color:"red", padding:"0" , margin:"0 0 5px 0"}}>{errors.userName}</p>}

               </div>
               <div className='email'>
                 <label>Email</label><br />
                 <input type="email" placeholder='Enter name@gmail.com' name='email' onChange={handelInput}/>

                 {errors.email && <p style={{color:"red", padding:"0" , margin:"0 0 5px 0"}}>{errors.email}</p>}

               </div>
               <div className='password'>
                 <label>Password</label><br />
                 <input type="password" placeholder='At least 8 characters' name='password' onChange={handelInput}/>

                 {errors.password && <p style={{color:"red", padding:"0" , margin:"0 0 5px 0"}}>{errors.password}</p>}

               </div>
               <div className='statue'>
                 <p>Please select your statue:</p>
                 <div className='satatueContent' >
                   <input type="radio" id="utilisateur" name="statue" value="Utilisateur"  onChange={handelInput}/>
                   <label htmlFor="utilisateur">Utilisateur</label><br/>
                   <input type="radio" id="stagiaire" name="statue" value="Stagiaire"   onChange={handelInput}/>
                   <label htmlFor="stagiaire">Stagiaire</label><br/>  
                   <input type="radio" id="emploiyeur" name="statue" value="Emploiyeur"   onChange={handelInput}/>
                   <label htmlFor="emploiyeur">Emploiyeur</label><br/><br/>  
                 </div>
                   {errors.statue && <p style={{color:"red", padding:"0" , margin:"-15px 5px 5px 0"}}>{errors.statue}</p>}
               </div>
               <div className='signIn_signUp_Btn'>
                 <input type="submit" value='Sign up' onClick={handleSignup}/>
               </div>
               <div className='other'>
                 <hr className="hr-text gradient" data-content="Or Login With"/>  
                 <div className='btn'>
                   <button><span><FcGoogle/> </span>Google</button>
                   <button><span><FaFacebookSquare/></span>Facebook</button>
                 </div> 
               </div>
             </form>
           </div>
           </div>

      </div>


      <div className="form-container sign-in-container"> 
        <div className='signIn'>
            <h1>Sign in</h1>
            <div className='content'>
              <form >
              <div className='email'>
                <label>Email</label><br />
                <input type="email" placeholder='Email' name='signEmail' required  onChange={changeEmail}/>
              </div>
              <div className='password'>
                <label>Password</label><br />
                <input type="password" placeholder='Password' name='signPassword' required onChange={changePassword} /><br />
                <h3>forget password ?</h3>
              </div>
              <div className='signIn_signUp_Btn'>
                <input type="submit" value='Login' onClick={handleSignin}/>
              </div>
              <div className='other'>
              <hr className="hr-text" data-content="Or Login With"/>
              <div className='btn'>
                <button><span><FcGoogle/></span>Google</button>
                <button><span><FaFacebookSquare/></span>Facebook</button>
              </div>
              </div>
              </form>
            </div>
          </div>
      </div>


      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <button className="ghost" id="signIn" onClick={() => setaddclass("")}>GO TO LOGIN</button>
          </div>
          <div className="overlay-panel overlay-right">
            <button className="ghost" id="signUp" onClick={() => setaddclass("right-panel-active")}>GO TO REGISTER</button>
          </div>
        </div>
      </div>


    </div>
  </div>
  </>
  );
};

export default Compte;