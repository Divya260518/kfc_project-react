import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Perispedit = () => {
    const{id}=useParams();
    const[productsItems,setproductsItems]=useState({
        name:"",
        des:"",
        title:"",
        food:"",
        price:"",

    })
    useEffect(()=>{
        fetch(`http://localhost:3030/foodingperi/${id}`)
        .then((res)=>res.json()) 
        .then((data)=>setproductsItems(data))
    })
    const handleUpdate=(event)=>{
        event.preventDefault();
        const form=event.target;
        const title=form.title.value;
        const img=form.img.value;
        const des=form.des.value;
        const food=form.food.value;
        const price=form.price.value;

        if(title===""||img===""||des===""||food===""||price==="")
            {
                toast.warn("update successfully")
            }

            const foodobj={title,img,des,food,price};
            console.log(foodobj);

            fetch(`http://localhost:3030/allproductsperi/${id}`,{
                method:"PATCH",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(foodobj),
            })
            .then((res)=>res.json())
            .then((data)=>{
                toast.warn("successfully update");
                window.location.href='/update'
            })
    }
  

    

  return (
    <div>
         
    <div class="card update6">
    <div class="card-body update5">
        <ToastContainer/>
<form onSubmit={handleUpdate} >
       <h2>EDIT</h2>
       <div class="update0">
           <label value="title"><b>TITLE</b></label>
           <input type="text" name="title" defaultValue= {productsItems.title} className='ms-3'/>
       </div>
       <div class="update1">
           <label value="img"><b>IMAGE</b></label>
           <input type='img' name="img" defaultValue={productsItems.img} className='ms-3'/>
           </div>
           <div class="update2">
           <label value="food"><b>FOOD</b></label>
           <input type='text'name="food" defaultValue={productsItems.food}className='ms-3'/>
           </div>
           <div class="update3">
           <label value="des"><b>DES</b></label>
           <input type='text' name="des" defaultValue={productsItems.des}className='ms-3'/>
           </div>
           <div class="update4">
           <label value="price"><b>PRICE</b></label>
           <input type='numbers'name="price" defaultValue={productsItems.price}className='ms-3'/>
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

export default Perispedit