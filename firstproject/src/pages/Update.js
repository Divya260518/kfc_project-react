import React, { useEffect, useState } from 'react'
import './Update.css'

import { toast } from 'react-toastify';
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Update = () => {
  const [productItems,setProductsItems]=useState([]);
  useEffect(()=>{
  fetch('http://localhost:3030/foods')
  .then((res)=>res.json())
  .then((data)=>
    setProductsItems(data))
},[])

const DeleteItems=(id)=>{
  fetch(`http://localhost:3030/food/${id}`,{
    method:"DELETE"
  })
  .then((res)=>res.json())
  .then((data)=>{
    toast.error("deleted successfully");
  setProductsItems((prevProductItems)=>prevProductItems.filter((Item)=>Item._id!==id));
  }
  )}

  return(

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
     {productItems.map((Item) =>(
        
            <tr key={Item._id}>
              <td>{Item.title}</td>
              <td><img src={Item.img} alt=''/></td>
              <td>{Item.des}</td>
              <td>{Item.price}</td>
              <td>{Item.food}</td>
              <td>{Item.quantity}</td>
             <td> 
              <button className='table3' placeholder='delete'onClick={()=>DeleteItems(Item._id)}>delete</button>
             <Link to={`/edit/${Item._id}`}><button><FiEdit /></button></Link> 
              </td>
            </tr>
            
          
        
      
     ))}
   </div>
     {/* <div className='table2'>
     <button  placeholder='submit'>submit</button>
     </div> */}
  </table>
  </div>
  </div>
  </div>
  )
}

export default Update