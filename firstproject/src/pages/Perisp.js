import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FiEdit } from "react-icons/fi";

const Perisp = () => {
    const[productsItems,setproductsItems]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3030/foodsperi`)
        .then((res)=>res.json())
        .then((data)=>setproductsItems(data))
    },[])
    const deleteitems=(id)=>{
        fetch(`http://localhost:3030/foodperi/${id}`,{
            method:"DELETE"
         })
         .then((res)=>res.json())
         .then((data)=>
        toast.error("deleted succefully"),
         setproductsItems((prevproductItems)=>prevproductItems.filter((Items)=>Items._id!==id))
        )
        
    }
  return (
    <div>
       
          <div className='card table2'>
      <div className='card-body'>
  <table>
  <div className='table1 '>
    <tr>
    <th >TITLE</th>
    <th>IMAGE</th>
    <th>DES</th>
    <th>PRICE</th>
    <th>FOODTYPE</th>
    <th>QUANTITY</th>
    <th>ACTIONS</th>
  </tr>
     {productsItems.map((Item) =>(
        
            <tr key={Item._id}>
              <td>{Item.title}</td>
              <td><img src={Item.img} alt=''/></td>
              <td>{Item.des}</td>
              <td>{Item.price}</td>
              <td>{Item.food}</td>
              <td>{Item.quantity}</td>
             <td>  
              <button className='table3' placeholder='delete'onClick={()=>deleteitems(Item._id)}>delete</button> 
             <Link to={`/perispedit/${Item._id}`}><button><FiEdit /></button></Link> 
              </td>
            </tr>
    
  ))}
   </div>
      
      
  </table>
  </div>
  </div>
  <button className='upload2' type='button'><Link to='/perispuploads'>upload</Link></button>
    </div>
  )
}

export default Perisp