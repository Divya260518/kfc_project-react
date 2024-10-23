import React, { useState } from 'react'
import axios from 'axios'
import './Signin.css';
import { signin } from '../auths';

const Signin = () => {
 const[username,setUsername]=useState("")
 const[password,setPassword]=useState("")
 const[error,setError]=useState("")
 const[success,setSuccess]=useState("")
   
 const handlesumbit=async(e)=>{
  e.preventDefault();
  try{
    await signin(username,password);
    setSuccess('successfully login');
    setError('');
    setPassword('');
    setUsername('');
    window.location.href='/login';
  }
  catch(err)
  {
    console.error('signin error',err)
    setError('sigin failed')
    
  }
 }


  return (
    <div>

        <form onSubmit={handlesumbit}>
         <div className='tool1'>
         <label>username</label>
         <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <label>password</label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <button type='sumbit'>Register</button>
              {/* {error &&<p style={{color:'red'}}>{error}</p>}
              {success &&<p style={{color:'green'}}>{success}</p>} */}
      </div>
     </form>
     
    
    
    
    </div>
 
    
    
  
    
  )
}

export default Signin