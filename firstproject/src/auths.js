import axios from "axios";

const API_URL="http://localhost:3030";

export const signin=async(username,password)=>{
    try{
        await axios.post(`${API_URL}/signin`,{username,password})
    }
    catch(err)
    {
        console.error('signin error', err.response ? err.response.data : err.message);
        throw new Error('signin error');
    }
}

export const login=async(username,password)=>{
    try{
        const response=await axios.post(`${API_URL}/login`,{username,password})
        const token=response.data.token;
        localStorage.setItem("token",token)
        return token;
    }
    catch(err)
    {
      console.error("login error",err.response ? err.response.data : err.message);
      throw new Error('login error');
    }
}

// export const getToken=()=>{
//     return localStorage.getItem('token');
// }

// export const isLoggedIn=()=>{
//     const token=getToken();
//     return token != null;
// }

// export const logOut=()=>{
//     localStorage.removeItem=('token')
// }