import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { FiEdit } from "react-icons/fi";

const Valuesnacks = () => {
  const[productsItems,setproductsItems]=useState([]);
  useEffect(()=>{
      fetch(`http://localhost:3030/foodsvalue`)
      .then((res)=>res.json())
      .then((data)=>setproductsItems(data))
  },[])
  const deleteitems=(id)=>{
      fetch(`http://localhost:3030/foodvalue/${id}`,{
          method:"DELETE"
       })
       .then((res)=>res.json())
       .then((data)=>
      toast.error("deleted succefully"),
       setproductsItems((prevproductItems)=>prevproductItems.filter((Items)=>Items._id!==id))
      )
      
  return (
    <div>
      <ToastContainer/>
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
 <button className='upload2' type='button'><Link to='/valuesnacksupload'>upload</Link></button>
    </div>
  )
}
}
export default Valuesnacks