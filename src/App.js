import './App.css';
import AppBar from './Appbar';
import './css/mainmin.css';
import Banner from './Banner';
import Menu from './Menu';
import Pic from './Pic';
import Jogo from './Jogo';
import Sasuke from './Sakura';
import  Form  from './Form';
import Testreduce from './Testreduce';
import Leo from './Leo';
import { BrowserRouter, Routes } from 'react-router-dom';


import { Route } from 'react-router-dom';

import Home from './Home';
import Musttry from './Musttry'
import Menucard from './Menucard';
import Comments from './Comments';

function App() {
  return (
 <div>
  <BrowserRouter>
  <AppBar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
       <Route path='/Menucard' element={<Menucard/>}/>
       <Route path='/Pic' element={<Pic/>}/>
       <Route path='/Comments' element={<Comments/>}/>
       
    
       
   
        
    
  </Routes>
  </BrowserRouter>

  <div className='text-center my-3 text-primary small'>copyright@2022-2023</div>


  
 
  
  {/* <Jogo/> */}
  {/* <Sasuke/> */}
  {/* <Testreduce />
  <Form/> */}
  {/* <Leo/> */}
 </div>
  );
}

export default App;
