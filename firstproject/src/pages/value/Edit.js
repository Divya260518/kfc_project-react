import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Edit = () => {
    const{id}=useParams;
    const [productsItems,setproductsItems]=useState ({
      name:"",
      title:"",
      des:"",
      price:"",
      food:"",
      qunantity:"",
    })
    useEffect(()=>{
     fetch(`http://localhost:3030/foodsperi/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))
      })
 const handleUpdate=(event)=>{
 event.preventDefault();
 const form=event.target;
 const title= form.title.value;
 const des=form.des.value;
 const food=form.food.value;
 const price=form.price.value;
 const img=form.img.value;
 
 
 const update={title,des,food,price,img,};
 console.log(update);
 fetch(`http://localhost:3030/allproductsperi/${id}`,{
   method:"PATCH",
   headers:{
     'content-type':'application/json'
   },
   body:JSON.stringify(update),
 })
 .then((res)=>res.json())
 .then((data)=>{
   toast.warn("successfully updated");
   window.location.href="/admin";
 })
 } 
 
 
 return (
    <div>
      <ToastContainer />
    <div class="card update6">
    <div class="card-body update5">
<form onSubmit={handleUpdate}>
       <h2>EDIT</h2>
       <div class="update0">
           <label value="title"><b>TITLE</b></label>
           <input type="text" name="title" defaultValue= {productData.title} className='ms-3'/>
       </div>
       <div class="update1">
           <label value="img"><b>IMAGE</b></label>
           <input type='img' name="img" defaultValue={productData.img} className='ms-3'/>
           </div>
           <div class="update2">
           <label value="food"><b>FOOD</b></label>
           <input type='text'name="food" defaultValue={productData.food}className='ms-3'/>
           </div>
           <div class="update3">
           <label value="des"><b>DES</b></label>
           <input type='text' name="des" defaultValue={productData.des}className='ms-3'/>
           </div>
           <div class="update4">
           <label value="price"><b>PRICE</b></label>
           <input type='numbers'name="price" defaultValue={productData.price}className='ms-3'/>
       </div>
       <section className='update9'>
       
       <div class="update7 ms-3">
           <button type="submit" class="btn btn-primary">UPDATE</button>
           
       </div>
    </section>
   </form>
   </div>
   </div>
   </div>
  )
}

export default Edit