import React, { useState } from 'react'
import itadori from './assets/center.jpeg'
import { Container , Row , Col, } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


function Pic() {

  const [show, setShow] = useState(false);

  return (
    <section id="M" className='my-4'>
        <div className="text-center my-3 py-3" >
            <h3 className="text-primary display-5"><i class="bi bi-tiktok"></i>Pick of the Week!</h3>
        </div>
        <Container>
            <Row className='align-items-center'>
                <Col md={7}>
                <img className='maki'
        src={itadori}
        alt='buffoon' fluid={true} >
        </img> 
                </Col>
                <Col md={5}>
                 <div>
                    <h2 className="h1">Double Cheese Fajita</h2>
                    <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                   <Button onClick={()=>setShow(true)}><i class="bi bi-basket"></i>Buy Now</Button>
                 </div>
                 
                </Col>
            </Row>
               

            <ToastContainer
          className="position-fixed bottom-0 end-0 p-3"
          position={'bottom-end'}
          style={{ zIndex: 1 }}
        >
            <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Cart</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body> items added to cart</Toast.Body>
          </Toast>
        </ToastContainer>
        </Container>
        
       
        
    </section>
  )
}

export default Pic;
