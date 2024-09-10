import React from "react"
import vt from "./Images/illustration/vt.png";

const Contact =  ()=> {
    return (
        <>

    
    <div class="row g-0 bg-dark pt-5">
      <div class="col-8 col-md-6 col-lg-6 pt-5 ps-5">
        <h5 className="text-light">CONTACT US</h5>
        <p>Our experts and developers would love to contribute their expertise and insights and help you today.</p>
        <div class="row text-light ">
          <div class="col-lg-3 me-lg-5 ">
            <p>Last Name*</p>
            <input type="text" placeholder="Last Name"/>
            <p>Email*</p>
            <input type="text" placeholder="Email"/>
          </div>
          <div class="col-lg-3  me-lg-5">
            <p>First Name*</p>
            <input type="text" placeholder="First Name"/>
            <p>Mobile</p>
            <input type="text" placeholder="Mobile"/>
          </div>
        </div>
        <div className="me-5 pe-5">
        <p className="text-center text-light">Message</p>
        <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
        </div>
      </div>            
      <div class=" col-md-6 col-lg-6 mt-5">
      <img src={vt}  className=" bg d-block w-100"  />
       </div>
      <div class="col-lg-12 text-center mt-4">
        <button type="button" class="btn btn-primary bg-opacity-25 sendemail" >Send Email....</button> 
      </div>
    </div>           
  
        </>
    )
}
export default Contact;