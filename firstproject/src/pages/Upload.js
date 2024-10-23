import React from 'react'
import './Upload.css'
import 'react-toastify/ReactToastify.css'
import {toast,ToastContainer} from 'react-toastify';

const Upload = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img= form.img.value;
        const price=form.price.value;
        const des=form.des.value;
        const food=form.food.value;
        const quantity = 1;

        if(title==="" ||img==="" || price==="" || des==="" || food==="" || quantity==="")
            {
               toast.warn("fill the required fields") 
            }
        
            const foodObj = {title,img,price,des,food,quantity};
            console.log(foodObj);

            fetch('http://localhost:3030/upload',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(foodObj)
            }).then((res)=>res.json())
            .then((data)=> {
                toast.success("data added successfully");
                form.reset();
                window.location.href = '/admin';
            })
            

    }
  return (
    <div>
        <ToastContainer/>
        <div class="card upload6">
         <div class="card-body upload5">
     <form onSubmit={handleSubmit}>
            <h2>UPLOAD</h2>
            <div class="upload0">
                <label value="title"><b>TITLE</b></label>
                <input type="text" id='title' name="title" className='ms-3'/>
            </div>
            <div class="upload1">
                <label value="img"><b>IMAGE</b></label>
                <input type='text' name="img" id='img' className='ms-3'/>
                </div>
                <div class="upload2">
                <label value="food"><b>FOOD</b></label>
                <input type='text' id='food' name="food" className='ms-3'/>
                </div>
                <div class="upload3">
                <label value="des"><b>DES</b></label>
                <input type='text' name='des' id='des' className='ms-3'/>
                </div>
                <div class="upload4">
                <label value="price"><b>PRICE</b></label>
                <input type='numbers' name='price' id='price' className='ms-3'/>
            </div>
            <div class="upload7">
                <button type="submit" class="btn btn-primary">upload</button>
                
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Upload