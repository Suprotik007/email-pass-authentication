import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../firebase';

const Login = () => {
    const[errorText,setErrorText]=useState('')
    const emailRef=useRef()
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const pass=e.target.pass.value
        console.log(email,pass);

// setSuccess('Successfully logged in')
setErrorText('something is wrong')
        signInWithEmailAndPassword(auth,email,pass)
        .then(result=>{
            console.log(result);
            
            
        })
        .catch(error=>{
            console.log(error);
            setErrorText(error.message)
        })
        
    }
    const handleForgetPass=()=>{
        console.log(emailRef.current.value);
        const email=emailRef.current.value
        
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('reset email sent')
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  
    
    <div className="card w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-4xl text-amber-300'>Login Now</h1>
      <div className="card-body">
        <form  onSubmit={handleLogin} className="fieldset">
          <label className="label" >Email</label>
          <input type="email" className="input" ref={emailRef} name='email'placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='pass' className="input" placeholder="Password" />
          <div><a onClick={handleForgetPass} className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>
  {
    errorText &&<p className='text-red-500'>{errorText}</p>
  }
</div>
        
    );
};

export default Login;