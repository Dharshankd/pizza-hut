import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';
 function AppBar() {
   return (
     <div>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><h2 className='text-primary'><span><i className="bi bi-yelp"></i>pizza shop</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <NavLink  to="/" className='Home'>Home</NavLink>
            <NavLink  to="/Menucard"  className='Menucard'>Menucard</NavLink>
            <NavLink  to="/Pic"  className='Musttry'>Musttry</NavLink> 
            <NavLink  to="/Comments"  className='Contactus'>Contact us</NavLink>
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </div>
   ) 
 }

 export default AppBar;
 
