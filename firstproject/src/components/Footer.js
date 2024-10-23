import React from 'react'
import './Footer.css';
import logo10 from '../images/logo10.svg';
import logo11 from '../images/logo11.svg';
import logo12 from '../images/logo12.svg';
import { CiLocationOn } from "react-icons/ci";



const Footer = () => {
  return (
    <div> 
        <section class="chicken3 bg-dark text-white mt-5">
    <div class="container">
     <div class="row ">
      <div class="col-lg-8">
       <div class="row">
         <div class="col-lg-2">
       <img src={logo10}></img>
     </div>
          <div class="col-lg-3">
            <ul class="footer1">
           <li>Legal</li>
           <li>Terms and Conditions</li>
           <li>Privacy Policy</li>
           <li>Disclaimer</li>
           <li>Caution Notice</li>
           </ul>
          </div>
          <div class="col-lg-2">
            <ul class="footer2">
           <li>KFC India</li>
           <li>About KFC</li>
           <li>KFC Care</li>
           <li>Careers</li>
           <li>Our Golden Past</li>
           </ul>
          </div>
          <div class="col-lg-3">
            <ul class="footer3">
           <li>KFC Food</li>
           <li>Menu</li>
           <li>Order Lookup</li>
           <li>Gift Card</li>
           <li>Nutrition & Allergen</li>
           </ul>
          </div>
          <div class="col-lg-2">
            <ul class="footer4">
           <li>Support</li>
           <li>Get Help</li>
           <li>Contact Us</li>
           <li>KFC Feedback</li>
           <li>Privacy Policy</li>
           </ul>
          </div>
     </div>
     </div>
     <div class="col-lg-4">
       <div class="row">
         <div class="col-lg-4">
       <p><CiLocationOn />Find to kfc</p>
     </div>
     <div class="col-lg-4">
       <img src={logo11}/>
     </div>
     <div class="col-lg-4">
       <img src={logo12}/>
     </div>
        </div>
        </div>
    </div>
    </div>
    <div class="tools text-center"><p>Copyright © KFC Corporation 2024 All Rights Reserved</p></div>
    
    
    </section>
    </div>
  )
}

export default Footer