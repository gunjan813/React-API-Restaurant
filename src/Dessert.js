import axios from 'axios'
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ice from "./Images/Background/ice.jpg";
import './App.css';

function Dessert() {

  const [data,setData] = useState([]);
  const getDataFromAPI=()=>{
    

    const options = {
      method: 'GET',
      url: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
      headers: {
        'X-RapidAPI-Key': '933880c529msh5abcc36ce8db85dp19c03bjsn8cae6b77c441',
        'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
      }
    };
    


axios.request(options).then((opt)=>{
  console.log(opt);
  console.log(opt.data);
  console.log(opt.data[0].id);
  console.log(opt.data[0].name);
 
  
  setData(opt.data);
}).catch((error)=>{
  console.log( error)
})


}
return (

  <>
  
            <div className="row g-0">
                <div className="col-12">
                <img src={ice}  className=" bg d-block w-100"  />
                </div>
                </div>
               
                
<div className='mt-5'>
  <div className='container'>
    <button type="button" onClick={getDataFromAPI}  className="btn btn-primary mt-5">Desserts</button>
    <hr/>
  <div className='Container'>
  <div className='row'>
  {
  data.map((dt,key)=>{
    return(

    <div key={key} className='col-4 card '>
    <img src={dt.img} alt=""/>
    
    <h1 className='fs-4 text-center'>{dt.name}</h1>
    <h1 className='fs-4'>{dt.veg}</h1>
    <h1 className='fs-4'>{dt.description}</h1>
    <div class="space-between">
      <button class="btn btn-success m-3 pt-2">Quantity:{dt.quantity}</button>
      <button class="btn btn-danger m-3 ">Price:{dt.price}</button>
      </div>
   
    </div>
    );

  })}    

  </div>
  </div>
   
  </div>
</div>
</>
);
}

export default Dessert;