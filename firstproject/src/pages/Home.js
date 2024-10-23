import React from 'react'
import logo from '../images/logo1.webp';
import logo2 from '../images/logo2.jpg';
import logo3 from '../images/logo3.jpg';
import logo4 from '../images/logo4.jpg';
import logo5 from '../images/logo5.jpg';
import logo6 from '../images/logo6.jpg';
import logo7 from '../images/logo7.jpg';
import logo8 from '../images/logo8.jpg';
import logo9 from '../images/logo9.svg';
import Footer from '../components/Footer';
import Login from './Login';






export const Home = () => {
  return (
    <div>
      
      <div class="chicken text-center bg-dark text-white p-3"><p>LET'S ORDER YOUR DELIVERY,PICK UP,OR DINE</p></div>
     <section class="poster ml-5 overflow-hidden"><img src={logo}></img>
       </section>
       <section class="chicken1 text-center">
        <div class="container">
          <div class="row">
        <h1>BROWSE CATEGORIES</h1>
        <div class="col-lg-3">
        <div class="card " >
  <img src={logo2} class="card-img-top" alt="logo2"/>
  <div class="card-body">
  <p><h4>PERI PERI CHICKEN</h4></p>
  </div>
</div>
         
         </div>
         <div class="col-lg-3">
         <div class="card" >
  <img src={logo3} class="card-img-top" alt="logo3"/>
  <div class="card-body">
  <p><h4>VALUE SNAKERS</h4></p>
  </div>
</div>
         </div>
         <div class="col-lg-3">
         <div class="card" >
  <img src={logo4} class="card-img-top" alt="logo4"/>
  <div class="card-body">
  <p><h4>CHICKEN ROLLS</h4></p>
  </div>
</div>
           </div>
           <div class="col-lg-3">
           <div class="card" >
  <img src={logo5} class="card-img-top" alt="logo5"/>
  <div class="card-body">
    <p><h4>CHICKEN BUCKETS</h4></p>
  </div>
</div>
           </div>
  
  
</div>
   </div>     
  </section>
  <section class="chicken2 mt-2 text-center">
        <div class="container">
          <div class="row">
        
        <div class="col-lg-3">
        <div class="card text-center" >
  <img src={logo6} class="card-img-top" alt="logo6"/>
  <div class="card-body">
  <p><h4>BIRYAIN BUCKETS</h4></p>
  </div>
</div>
         
         </div>
         <div class="col-lg-3">
         <div class="card" >
  <img src={logo7} class="card-img-top" alt="logo7"/>
  <div class="card-body">
  <p><h4>MEAL BOX</h4></p>
  </div>
</div>
         </div>
         <div class="col-lg-3">
         <div class="card" >
  <img src={logo8} class="card-img-top" alt="logo8"/>
  <div class="card-body">
  <p><h4>BURGERS</h4></p>
  </div>
</div>
           </div>
           <div class="col-lg-3">
           <div class="card" >
  <img src={logo9} class="card-img-top" alt="logo9"/>
  <div class="card-body">
    <p><h4>VIEW ALL MENU </h4></p>
  </div>
</div>
           </div>
  
  
</div>
   </div>     
  </section>
  <Footer/>
  
 </div>
  )
}
export default Home