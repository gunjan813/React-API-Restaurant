import React from "react"
import logo from  './Images/Background/logo.png'
const Footer =  ()=> {
    return (
        <>
      
            <section class="row g-0" id="nav" >
                <div class="col-md-3 fs-5 pe-3 mt-3">
                <img src= {logo} class="card-img-top img-fluid "/>
                <p class="tom">Subscribe our newsletter and get
                    discount 30% off</p>
                </div>
                <div class="col-md-3 ">
                    <p class="fs-1 text-dark">Online Sevices</p>
                <p class="text-light fs-3 tom">About Us</p>
                <p class="text-light fs-3 tom">+568 325 874</p>
                <p class="text-light fs-3 tom">Pagination</p>
                <p class="text-light fs-3 tom">Wholesale Policy</p>
                </div>
                <div class="col-md-3">
                    <p class="fs-1 text-dark tom">Customer Care</p> 
                    <ul class="text-light fs-4 tom">
                        <p> Delivery</p>
                        <p> Contact us</p>
                        <p> Our Services</p>
                        <p> Delivery Return</p>
                        <p>Terms & Conditions</p>
                    </ul>
                </div>
        
                <div class="col-md-3 tom">
                    <p class="fs-1 text-dark">Company</p>      
                    <p class="text-light fs-5">Menu items</p>
                    <p class="text-light fs-5">Help Center</p>
                    <p class="text-light fs-5"> Address Store</p> 
                    <p class="text-light fs-5">HomePage</p> 
                    </div>
                
            </section>
        </>

    )
}
export default Footer;    