import React, { useEffect, useState } from 'react'
import upload from '../periperi/Upload'
import Upload from './value/Upload'

const periperis = () => {
    

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
     
        
            {/* <tr >
              <td>title</td>
              <td><img src={img alt=''/></td>
              <td>des</td>
              <td>{Item.price}</td>
              <td>{Item.food}</td>
              <td>{Item.quantity}</td>
             <td>  */}
              <button className='table3' placeholder='delete'onClick={()=>DeleteItems(Item._id)}>delete</button>
             <Link to={`/edit/${Item._id}`}><button><FiEdit /></button></Link> 
              {/* </td>
            </tr>
             */}
          
        
      
     
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

export default periperis