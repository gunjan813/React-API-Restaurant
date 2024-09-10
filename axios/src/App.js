import axios from 'axios';
import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

const [name,setName] =useState();
const [age,setAge] =useState();
const [data,setData] =useState([]);

  const getName = (event)=>{
  setName(event.target.value);
}

 const getAge = (event)=>{
  setAge(event.target.value);
}
const SendData = () =>{
  axios.post("https://660ceb343a0766e85dbef0e6.mockapi.io/user",
  {name,age}
  ).then((data)=>{
    console.log(data);
  }).catch((res)=>{
    console.log (res);
  });
};

const DisplayData =() =>{
  axios.get("https://660ceb343a0766e85dbef0e6.mockapi.io/user").then((info)=>{
    setData(info.data);
    console.log (info.data);
  }).catch((res)=>{
    console.log (res);
  })
};

  return (
    <div className="App container">
     <input className='form-control mt-2' onChange={getName} placeholder='Enter name'/> 
     <input className='form-control mt-2' onChange={getAge} placeholder='Enter age'/> ,
     <button type='button' onClick={SendData} className='btn btn-warning mt-2'>  Add Data </button>
     <button type='button' onClick={DisplayData} className='btn btn-warning mt-2'>  Show Data </button>

     {data.map((dt,key)=>{
      return(
        <div key={key} className='container d-flex justify-content-between'>
          <span>Id: {dt.id}</span>
          <span>Name: {dt.name}</span>
          <span>Age: {dt.id}</span>
    </div>
  );
})}
</div>
);
}

export default App;
