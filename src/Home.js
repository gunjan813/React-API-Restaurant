import React from "react";
import Gallery from "./Gallery";
import hm from "./Images/Background/hm.jpg";
import M from "./Images/illustration/M.jpg";
import H from "./Images/illustration/H.jpg";
import Contact  from "./Contact";
import G from "./Images/illustration/G.jpg";
import "./Home.css";
import axios from 'axios'
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Chinese from "./Chinese";


const Home =  ()=> {

    return (
       
       <>
            <div className="row gunj  g-0 ">
                <div className="col-12 ">
                <img src={hm}  className=" bg d-block w-100"  />
                <h1 class="head1 text-light">Welcome to Resturant</h1>
                </div>
                <Gallery/>
                <Chinese/>
              
                </div>


        <div className='row g-0 pb-0 bg-black '>
       <div className='row p-3 bg-black'>
       </div>
       <h2 className="text-light bg-black pb-4">OUR POPULAR DISHES</h2>
        <div className='col-12 col-md-4 '>
        <img src={M}  className=" bg d-block w-100"  />
        </div>
        <div className='col-12 col-md-4 '>
        <img src={H}  className=" bg d-block w-100"  />
        </div>
        <div className='col-12 col-md-4 '>
        <img src={G}  className=" bg d-block w-100"  />
        </div>
        <Contact/>
        </div>
 
             
</>
    )
}
export default Home;    