import React from 'react'
import { Link } from 'react-router-dom'

const Burgers = () => {
  return (
    <div>
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
  {/* {productItems.map((Item) =>(
     
         <tr key={Item._id}>
           <td>{Item.title}</td>
           <td><img src={Item.img} alt=''/></td>
           <td>{Item.des}</td>
           <td>{Item.price}</td>
           <td>{Item.food}</td>
           <td>{Item.quantity}</td>
          <td>  */}
           {/* <button className='table3' placeholder='delete'onClick={()=>DeleteItems(Item._id)}>delete</button> */}
          {/* <Link to={`/edit/${Item._id}`}><button><FiEdit /></button></Link>  */}
           {/* </td>
         </tr> */}
         
       
     
   
  {/* ))} */}
</div>
  {/* <div className='table2'>
  <button  placeholder='submit'>submit</button>
  </div> */}
   
</table>
</div>
</div>
<button className='upload2' type='button'><Link to='/burgersupload'>upload</Link></button>
 </div>
    </div>
  )
}

export default Burgers