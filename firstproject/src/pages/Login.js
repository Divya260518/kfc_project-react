

import { useState } from 'react';
import './Login.css';

import { login } from '../auths';

const Login = () => {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");

  const handlesumbit=async(e)=>{
    e.preventDefault();
    console.log("username",username);
    console.log("password",password);

    try{
      const token=await login(username,password);
      console.log("login successfully",token);
      alert("login successfully");
      setError('');
    }
    catch(err)
    {
      console.error("login error",err);
      setError("login failed")
    }
  }  

return(
  <div>
     <form onSubmit={handlesumbit}>
         
         <label>username</label>
         <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <label>password</label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <button type='sumbit'>login</button>
              {error&&<p style={{color:'red'}}>{error}</p>}
      
     </form>
     
  </div>
)
 
}

export default Login