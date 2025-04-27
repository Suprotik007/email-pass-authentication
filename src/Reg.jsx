import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase'
const Reg = () => {
    const[error,setError]=useState()
    const [showPass,setShowPass]=useState(false)
    const handleReg=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        const terms=e.target.terms.checked
            console.log(email,password,terms);

            if(!terms){
              setError('Please accept terms')
              return
            }
            const expression=/(?=.*\d)(?=.[a-z])(?=.*[A-Z]).{8,}/
            if(expression.test(password)===false){
setError('lowercase,uppercase,digit,6characters')
            }

          
            createUserWithEmailAndPassword(auth, email, password)
              .then((result) => {
                console.log(result);
                
                
              })
              .catch((error) => {  
                console.log(error);
                
              });





    }
    


    
    return (
        <form onSubmit={handleReg}>
<div >
            <h1 className='text-5xl'> Register</h1>
            <div className='mt-10 grid grid-cols-1 gap-5 items-center '>
{/* email */}
            <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" name='email' placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>

{/* pass */}

<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <div className=' 
  relative'>
  <input
    type={showPass? 'text':"password"}
    name='password'
    required
    placeholder="Password"
    
    
  />
  <button onClick={()=>{setShowPass(!showPass)}} className='absolute btn btn-xs -right-29'>
  {
    showPass? <IoEyeOff />:<FaEye />
  }
  </button>
  </div>
</label>
<p className="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>

            </div>

          <div className='grid '>
          <label className="label">
    <input type="checkbox" name='terms' defaultChecked className="checkbox " />
    Terms and condition
    <button className="btn btn-soft btn-info pt-2 mt-3 items-start">Submit</button>
  </label>
          </div>
            
        </div>

        </form>
    );
};

export default Reg;