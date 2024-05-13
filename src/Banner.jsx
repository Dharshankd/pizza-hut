import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import  {Row, Col} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

import require from './assets/hero-bg.jpg'
import required from './assets/hero-bg.jpg'
import requiree from './assets/hero-bg.jpg'
 function Banner() {
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
            <Col lg={12}>
            <Carousel>
      <Carousel.Item interval={2000}>
       <img
       className="d-block w-100"
       src={required}
       alt='' 
       ></img>
        <Carousel.Caption>
          <h2>Margarita</h2>
          <p className='d-none d-sm-block'>
            Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img
       className="d-block w-100"
       src={requiree}
       alt=''
       ></img>
        <Carousel.Caption>
          <h2>Cheese pizza</h2>
          <p className='d-none d-sm-block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img
       className="d-block w-100 "
       src={require}
       alt=''
       ></img>
       
        <Carousel.Caption>
          <h2>pepperoni</h2>
          <p className='d-none d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        <div className='text-center'>
        <h2 className='display-5 mt-3'>pizzas for every occasion!</h2>
        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur, </p>
        </div>
      </Container>
    </div>
  )
}
export default Banner;
