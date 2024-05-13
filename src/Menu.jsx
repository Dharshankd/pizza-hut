import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap';
import Pizzacard from './Pizzacard';



function Menu() {
    
  return (
    <section id='Menu' className='bg-light'>
        <Container>
            <div className="Card">
                <h3 className="text-primary my-3 py-5">Treat yourself with our Everyday Menu <i class="bi bi-tiktok"></i></h3>
            </div>
            <div className='CardOne'>
            <Row>
        
                     <Col md={6} lg={4}  >
                    <Pizzacard/>
                    
                    
                </Col>
                 
            </Row>
                 
            </div>
        </Container>
    </section>
  )
}

export default Menu;
