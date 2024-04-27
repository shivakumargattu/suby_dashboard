import React,{useState} from 'react'
import { API_URL } from '../../data/apiPath';

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const loginHandler = async(e)=>{
    e.preventDefault();
    try {
        const response = await fetch(`${API_URL}/vendor/login`, {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password})
        })
        if(response.ok){
          alert('Login success');  
        
        } 
       } catch (error) {
      console.log(error)
       alert("Login Fail")
    }
  };
  
  return (
    <div className='loginSection'>
    <div className='loginsSectionContainer'>
      <h1>Vendor Login</h1>
      <form className='authForm' onSubmit={loginHandler}>
        <label >Email</label><br/>
        <input type='text' value={email} name='email'  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/><br/>
        <label >Password</label><br/>
        <input type='password' value={password} name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/><br/>
        <div className='subButton'>
        <button className='btnSubmit' type='submit'>Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
