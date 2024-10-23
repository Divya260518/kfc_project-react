import React from 'react'
import { FaUserSecret } from "react-icons/fa6";
import './Navbar.css';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { GiRoastChicken } from "react-icons/gi";


const Navbar = () => {
  return (
    <div>
      <div className='hiiif'>
    <section class="shark1 ">
      <hr />
    <div class="shark text-center text-dark"><p><FaLocationDot />Allows location access for location store menu and proms <a href="#" class="btn btn-dark">Set location</a></p></div>
    <hr />
    </section>
    
    <nav class="navbar navbar-expand-lg bg-white ">
  
    <div class="container-fluid">
      
      <Link class="navbar-brand " to='/home'><img src={logo} ></img></Link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to='/'>Menu</Link>
          </li>
          <li className="nav-item">
         <Link className="nav-link" aria-current="page" to='/cart'>Cart</Link>
         </li>
         
         <li className="nav-item ">
         <Link className="nav-link " aria-current="page"  to='/admin'>Admin</Link>
         </li>
          
         <li className="nav-item ">
         <Link className="nav-link " aria-current="page" to='/form' >Form</Link>
         </li>
         </ul>
         </div>
         </div>
          <div class="shoes">
           <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FaUserSecret /> SIGN IN 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to='/login'>LOG IN</Link></li>
            <li><a class="dropdown-item" href="#">LOG OUT</a></li>
            <li><Link class="dropdown-item" to="/signin">SIGN IN</Link></li>
          </ul>
        
         </div> 
         
    
    </div>
    
  </nav>
  </div>
  
  </div>
  )
}

export default Navbar;

