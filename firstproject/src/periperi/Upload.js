import React from 'react'
import { ToastContainer } from 'react-toastify';

const upload = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const title=form.title.value;
        const img=form.img.value;
        const food=form.food.value;
        const des=form.des.value;
        const price=form.price.value;
        const quantity=form.quantity.value;

        if(title==="" || img===""||des===""||food===""||price===""||quantity==="");
        {
            toast.warn('fill required');
        }
        const foods=(title,img,des,food,price,quantity);
        console.log(foods);
        
        fetch(`http://localhost:3030/uploadperi`,{
            method:"POST",
            Headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(foods),
        })
        .then((res)=>res.josn())
        .then((data)=>{
            toast.success('added successfully');
            form.rest();
            window.location.href=""
        }

        )

        }

        return (
            <div>
                <ToastContainer/>
              <div class="card upload6">
         <div class="card-body upload5">
     <form onSubmit={handleSubmit} >
            <h2>UPLOAD</h2>
            <div class="upload0">
                <label value="title"><b>TITLE</b></label>
                <input type="text" name="title" className='ms-3'/>
            </div>
            <div class="upload1">
                <label value="img"><b>IMAGE</b></label>
                <input type='img' name="img" className='ms-3'/>
                </div>
                <div class="upload2">
                <label value="food"><b>FOOD</b></label>
                <input type='text' name="food" className='ms-3'/>
                </div>
                <div class="upload3">
                <label value="des"><b>DES</b></label>
                <input type='text' name='des' className='ms-3'/>
                </div>
                <div class="upload4">
                <label value="price"><b>PRICE</b></label>
                <input type='numbers' name='price' className='ms-3'/>
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


export default upload