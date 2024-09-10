
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import Home from './Home';
import Pizza from './Pizza';
import Dessert  from './Dessert';
import Contact from "./Contact";
import Chinese from "./Chinese";
import Footer from './Footer';

function App() {
  return(
    <div className="App">



       <BrowserRouter>

      <Nav/>
       <Routes>
     
       <Route path='/*' element={ <Home/>}/>
       <Route path='/Home' element={ <Home/>}/>
       <Route path='/Pizza' element={ <Pizza/>}/>
       <Route path='/Dessert' element={ <Dessert/>}/>
       <Route path='/Contact' element={ <Contact/>}/>
       <Route path='/Chinese' element={ <Chinese/>}/>
      
      </Routes>

      <Footer/>

      </BrowserRouter> 


    </div>
  )

}

export default App;