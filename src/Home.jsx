import React from 'react'
import { NavLink } from 'react-router-dom';
import Menucard from './Menucard';
import Musttry from './Musttry';
import AppBar from './Appbar';
import Banner from './Banner';
import Pic from './Pic';
import Column from './Column';
import Comments from './Comments';

function Home() {
  return (
    <div>
      
      <Banner/>
      <Column/>
      <Pic/>  
      <Comments/>
      
    </div>
  )
}

export default Home;
