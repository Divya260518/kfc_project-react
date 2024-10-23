import React, { useEffect, useState } from 'react'

import './Menu.css';
import Footer from '../components/Footer';
import Peri from '../Product/Peri';
import Value from '../Product/Value';
import Chickenrolls from '../Product/Chickenrolls';
import Chickenbuckets from '../Product/Chickenbuckets';
import Biryanibucket from '../Product/Biryanibucket';
import Boxmeals from '../Product/Boxmeals';
import Burgers from '../Product/Burgers';
import Snacks from '../Product/Snacks';
import Beverages from '../Product/Beverages';
import { addToCart,  deleteFromCart } from '../store/cartslice/Cartslice';
import { useDispatch, useSelector } from 'react-redux';




const Menu = () => {
  const cartProducts=useSelector((state)=>state.cart.cartItems)
  const dispatch=useDispatch();

  const addCart=(item)=>{
    dispatch(addToCart(item))
  }
  
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
}
const[chickenwings,setchickenwings]=useState([])
useEffect(()=>{
  fetch(`http://localhost:3030/foods`)
  .then((res)=>res.json())
  .then((data)=>{
    if(Array.isArray(data)){
      setchickenwings(data)
       }
       
  }).catch((err)=>
  console.log(err));
});
  return (
    <div>
      <section class="chicken4">
      <div class="container">
          <div class="row">
            <div class="  hsse col-lg-4">
              <div class="role">
                
                <div class="card ">
                <div class="ship">
                <div class="card-body ships">
              <ul >
              <li><h2>KFC MENU</h2></li><br></br>
              <li><a class="sharp" href="#PERI PERI CHICKEN">PERI PERI CHICKEN</a></li><br/>
              <li><a class="row" href="#VALUE SNACKERS">VALUE SNACKERS</a></li><br/>
              <li><a class="row" href="#CHICKEN ROLLS">CHICKEN ROLLS</a></li><br/>
              <li><a class="row" href="#CHICKEN BUCKETS">CHICKEN BUCKETS</a></li><br/>
              <li><a class="row" href="#BIRYANI BUCKETS">BIRYANI BUCKETS</a></li><br/>
              <li><a class="row" href="#BOX MEALS">BOX MEALS</a></li><br/>
              <li><a class="row" href="#BURGERS">BURGERS</a></li><br/>
              <li><a class="row" href="#SNACKS">SNACKS</a></li><br/>
              <li><a class="row" href="#BEVERAGES">BEVERAGES</a></li><br/>
              <li><a class="row" href="#CHICKENWINGS">CHICKENWINGS</a></li><br/>
              </ul>
              </div>
              </div>
              </div>
              </div>
            </div>
                
         </div> 
         </div>      
      </section>
 <div>
      <section class="chicken70 mt-3">
        <div class="container">
          <div class="row">
            <div class="   col-lg-4 d-flex">
            
            </div>
            <div class="  hssc col-lg-8">
              
              <sharp id='PERI PERI CHICKEN'>
              <h2>PERI PERI CHICKEN</h2>
              </sharp>
              <div class="row">
                {Peri.map((item)=>(
                             <div class="col-lg-4">
                             <div class="card" key={item._id}>
            <img src={item.img} alt=''/> 
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="par  text-decoration-underline">{item.des}</p>
              <p class="food type">{item.foodtype}</p>
               {cartProducts.find(Items=>Items._id===item._id)?(
              
             <button class="btn btn-danger" onClick={()=>{ deleteCart(item) }} > Remove From Cart </button>)
             :
              (<button class="btn btn-danger" onClick={()=>{ addCart(item) }} > Add To Cart </button>)
     }
  
            </div>
          </div>
                          </div>
                          
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>       
</div> 




      <section class="chicken71 mt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex">
            
            </div>
            <div class="col-lg-8">
              
              <row id='VALUE SNACKERS'>
              <h2>VALUE SNACKERS</h2>
              </row>
              <div class="row">
                {Value.map((item)=>(
                             <div class="col-lg-4">
                             <div class="card" key={item.id}>
            <img src={item.img} alt=''/> 
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="par  text-decoration-underline">{item.des}</p>
              <p class="food type">{item.foodtype}</p>
              {cartProducts.find((Items)=>Items.id===item.id)?(
    
    <button
     class="btn btn-danger" 
     onClick={()=>{
       deleteCart(item);
     }}
     >
       Remove From Cart
     </button>
     ):(
       <button 
       class="btn btn-danger"
       onClick={()=>{
         addCart(item);
       }}
     >
       Add To Cart
     </button>
     )}
            </div>
          </div>
                          </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>      

      <section class="chicken72 mt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex">
            
            </div>
            <div class="col-lg-8">
              
              <row id='CHICKEN ROLLS'>
              <h2>CHICKEN ROLLS</h2>
              </row>
              <div class="row">
                {Chickenrolls.map((item)=>(
                             <div class="col-lg-4">
                             <div class="card" key={item.id}>
            <img src={item.img} alt=''/> 
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="par  text-decoration-underline">{item.des}</p>
              <p class="food type">{item.foodtype}</p>
              {cartProducts.find((items)=>items.id===item.id)?(
    
    <button
     class="btn btn-danger"
     onClick={()=>{
       deleteCart(item);
     }}
     >
       Remove From Cart
     </button>
     ):(
       <button 
       class="btn btn-danger"
       onClick={()=>{
         addCart(item);
       }}
     >
       Add To Cart
     </button>
     )}
            </div>
          </div>
                          </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>      


      <section class="chicken73 mt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex">
            
            </div>
            <div class="col-lg-8">
              
              <row id='CHICKEN BUCKETS'>
              <h2>CHICKEN BUCKETS</h2>
              </row>
              <div class="row">
                {Chickenbuckets.map((item)=>(
                             <div class="col-lg-4">
                             <div class="card" key={item.id}>
            <img src={item.img} alt=''/> 
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="par  text-decoration-underline">{item.des}</p>
              <p class="food type">{item.foodtype}</p>
              {cartProducts.find((items)=>items.id===item.id)?(
    
    <button
     class="btn btn-danger"
     onClick={()=>{
       deleteCart(item);
     }}
     >
       Remove From Cart
     </button>
     ):(
       <button 
       class="btn btn-danger"
       onClick={()=>{
         addCart(item);
       }}
     >
       Add To Cart
     </button>
     )}
            </div>
          </div>
                          </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>      


      <section class="chicken74 mt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex">
            
            </div>
            <div class="col-lg-8">
              
              <row id='BIRYANI BUCKETS'>
              <h2>BIRYANI BUCKETS</h2>
              </row>
              <div class="row">
                {Biryanibucket.map((item)=>(
                             <div class="col-lg-4">
                             <div class="card" key={item.id}>
            <img src={item.img} alt=''/> 
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="par  text-decoration-underline">{item.des}</p>
              <p class="food type">{item.foodtype}</p>
              {cartProducts.find((items)=>items.id===item.id)?(
    
    <button
     class="btn btn-danger"
     onClick={()=>{
       deleteCart(item);
     }}
     >
       Remove From Cart
     </button>
     ):(
       <button 
       class="btn btn-danger"
       onClick={()=>{
         addCart(item);
       }}
     >
       Add To Cart
     </button>
     )}
            </div>
          </div>
                          </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>      


      <section class="chicken75 mt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex">
            
            </div>
            <div class="col-lg-8">
              
              <row id='BOX MEALS'>
              <h2>BOX MEALS</h2>
              </row>
              <div class="row">
                {Boxmeals.map((item)=>(
                             <div class="col-lg-4">
                             <div class="card" key={item.id}>
            <img src={item.img} alt=''/> 
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="par  text-decoration-underline">{item.des}</p>
              <p class="food type">{item.foodtype}</p>
              {cartProducts.find((items)=>items.id===item.id)?(
    
    <button
     class="btn btn-danger"
     onClick={()=>{
       deleteCart(item);
     }}
     >
       Remove From Cart
     </button>
     ):(
       <button 
       class="btn btn-danger"
       onClick={()=>{
         addCart(item);
       }}
     >
       Add To Cart
     </button>
     )}
            </div>
          </div>
                          </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>      


      <section class="chicken76 mt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex">
            
            </div>
            <div class="col-lg-8">
              
              <row id='BURGERS'>
              <h2>BURGERS</h2>
              </row>
              <div class="row">
                {Burgers.map((item)=>(
                             <div class="col-lg-4">
                             <div class="card" key={item.id}>
            <img src={item.img} alt=''/> 
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="par  text-decoration-underline">{item.des}</p>
              <p class="food type">{item.foodtype}</p>
              
            </div>
          </div>
                          </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>      
          

      <section class="chicken77 mt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex">
            
            </div>
            <div class="col-lg-8">
              
              <row id='SNACKS'>
              <h2>SNACKS</h2>
              </row>
              <div class="row">
                {Snacks.map((item)=>(
                             <div class="col-lg-4">
                             <div class="card" key={item.id}>
            <img src={item.img} alt=''/> 
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="par  text-decoration-underline">{item.des}</p>
              <p class="food type">{item.foodtype}</p>
              {cartProducts.find((items)=>items.id===item.id)?(
    
    <button
     class="btn btn-danger"
     onClick={()=>{
       deleteCart(item);
     }}
     >
       Remove From Cart
     </button>
     ):(
       <button 
       class="btn btn-danger"
       onClick={()=>{
         addCart(item);
       }}
     >
       Add To Cart
     </button>
     )}
            </div>
          </div>
                          </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>     

      <section class="chicken78 mt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex">
            
            </div>
            <div class="col-lg-8">
              
              <row id='BEVERAGES'>
              <h2>BEVERAGES</h2>
              </row>
              <div class="row">
                {Beverages.map((item)=>(
                             <div class="col-lg-4">
                             <div class="card" key={item.id}>
            <img src={item.img} alt=''/> 
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="par  text-decoration-underline">{item.des}</p>
              <p class="food type">{item.foodtype}</p>
              {cartProducts.find((items)=>items.id===item.id)?(
    
    <button
     class="btn btn-danger"
     onClick={()=>{
       deleteCart(item);
     }}
     >
       Remove From Cart
     </button>
     ):(
       <button 
       class="btn btn-danger"
       onClick={()=>{
         addCart(item);
       }}
     >
       Add To Cart
     </button>
     )}
            </div>
          </div>
                          </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>     
           

      <section class="chicken79 mt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex">
            
            </div>
            <div class="col-lg-8">
              
              <row id='CHICKENWINGS'>
              <h2>CHICKEN WINGS</h2>
              </row>
              <div class="row">
                {chickenwings.map((item)=>(
                             <div class="col-lg-4">
                             <div class="card" key={item._id}>
            <img src={item.img} alt=''/> 
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="par  text-decoration-underline">{item.des}</p>
              <p class="food type">{item.foodtype}</p>
              {cartProducts.find((items)=>items._id===item._id)?(
    
    <button
     class="btn btn-danger"
     onClick={()=>{
       deleteCart(item);
     }}
     >
       Remove From Cart
     </button>
     ):(
       <button 
       class="btn btn-danger"
       onClick={()=>{
         addCart(item);
       }}
     >
       Add To Cart
     </button>
     )}
            </div>
          </div>
                          </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> 
    <Footer/>
    </div>
  )
}

export default Menu