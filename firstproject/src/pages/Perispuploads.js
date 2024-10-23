import React from 'react'
import { toast } from 'react-toastify';

const Perispuploads = () => {
    const handlesubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const title=form.title.value;
        const img=form.img.value;
        const des=form.des.value;
        const food=form.food.value;
        const price=form.price.value;

        if(title===""||img===""||des===""||food===""||price==="")
            {
                toast.warn("fill required");
            }
            const foodobj={title,img,des,food,price}
            console.log(foodobj);

            fetch("http://localhost:3030/uploadperi",{
                method:"POST",
                headers:{
                   'content-type': "application/json"},
                   body:JSON.stringify(foodobj)

            })
            .then((res)=>res.json())
            .then((data)=>{
                toast.success("data added successfully");
                form.reset();
            }
            )
    }
  return (
    <div>
         <div class="card upload6">
         <div class="card-body upload5">
     <form onSubmit={handlesubmit} >
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

export default Perispuploads