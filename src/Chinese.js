import axios from 'axios'
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';

function Chinese() {

    const [data,setData] = useState([]);
    const getDataFromAPI=()=>{
   
 
const options = {
    method: 'GET',
    url: 'https://chinese-food-db.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '321787d33emsh32bdfe2a0868d72p177c64jsn2d6b77686a26',
      'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
    }
  };
  axios.request(options).then((opt)=>{
    console.log(opt);
    console.log(opt.data);
    console.log(opt.data[0].id);
    console.log(opt.data[0].title);
    console.log(opt.data[0].difficulty);
    console.log(opt.data[0].image);
   
    
    setData(opt.data);
  }).catch((error)=>{
    console.log( error)
  })
  
  
  }
  return (
    
  <div  className='mt-5'>
    <div className='container'>
     <b> <button type="button" onClick={getDataFromAPI}  className="btn btn-primary text-light mt-5">MORE RECIPIES</button></b>
      
      <hr/>
   
    <div className='Container'>
    <div className='row'>
    {
    data.map((dt,key)=>{
      return(
  
      <div key={key} className='col-4 card'>
      <img src={dt.image} alt=""/>
      
      <h1 className='fs-4 text-center'>{dt.title}</h1>
      <h1 className='fs-4'>{dt.difficulty}</h1>
    
      <div class="space-between">
        <button class="btn btn-success m-3 pt-2">Quantity:{dt.quantity}</button>
        <button class="btn btn-danger m-3">Price:{dt.price}</button>
        </div>
     
    
      </div>
      );
  
    })}    
  
    </div>
    </div>
     
    </div>
  </div>
  );
  }
  
export default Chinese;    