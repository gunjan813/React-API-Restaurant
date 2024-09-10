import React from "react";
import {Link} from "react-router-dom";
import logo from './Images/Background/logo.png';

const Nav =  ()=> {
    return (


 <section class="container-fluid ">
<section class="row  ">
    <div class="col-12">
<nav class="navbar navbar-expand-md  fixed-top" id="nav">
  <div class="container-fluid  pt-4 ">
    
   
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
    <img src={logo} alt={logo} className="a ms-4 mb-5"/>
    <div class="collapse navbar-collapse mb-5 " id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0 ">
       
      <li class="nav-item">
          <Link to="/" class="nav-link text-light fs-5 ms-5 " >HOME</Link>
        </li>
        <li class="nav-item">
          <Link to="/features" class="nav-link text-light fs-5  ms-4" >ABOUTUS</Link>
        </li>
        <li class="nav-item">
        <Link to="/Pizza" class="nav-link text-light fs-5 ms-4" >PIZZA</Link>
        </li>
        <li class="nav-item">
        <Link to="/Dessert" class="nav-link text-light fs-5 ms-4" href="#">DESSERT</Link>
        </li>

        
        <li class="nav-item">
          <Link to="/Gallery" class="nav-link  text-light fs-5 ms-4" >GALLERY</Link>
        </li>
       
        <li class="nav-item">
          <Link to="/Contact" class="nav-link  text-light fs-5 ms-4" >CONTACT</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
</section>
</section> 



    )
}
export default Nav;    