import React,{useState} from 'react'
import { API_URL } from '../../data/apiPath';

const Register = () => {
  const [username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(true);

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      const response=await fetch(`${API_URL}vendor/register`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({username,email,password})
      })

      const data=await response.json();
      if(response.ok){
        setEmail("")
        setUserName("")
        setPassword("")
        alert("Vender Register success")
        console.log(data)


      }
      
    } catch (error) {
      console.log(error)
      alert("Registion  faild")
    }

  }

  return (
    <div className='loginSection'>
    <div className='loginsSectionContainer'>
      <h1>Vendor Register</h1>
      <form className='authForm' onSubmit={handleSubmit}>
      <label >User Name</label><br/>
        <input type='text' name='username' value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='Enter user Name'/><br/>
      
        <label >Email</label><br/>
        <input type='text' name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/><br/>
        <label >Password</label><br/>
        <input type='password' name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/><br/>
        <div className='subButton'>
        <button className='btnSubmit' type='submit'>Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register