import React from 'react'
import { Col ,Container,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

import yuji from './assets/pizzatwo.jpg'
import foodone from './assets/realone.jpeg'
import foodtwo from './assets/realtwo.jpeg'
import foodthree from './assets/realthree.jpeg'
import foodfour from './assets/realfour.jpeg'
import foodfive from './assets/realfive.jpeg'



function Column() {
    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
        return( <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Pizza Shop
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Ready to Order</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>)
    }
    
  return (
    <Container>
    <div className='bg-light'>
    <div className="Card">
                <h3 className="text-primary my-3 py-5">Treat yourself with our Everyday Menu <i class="bi bi-tiktok"></i></h3>
            </div>
     <Row>
        <Col md={6} lg={4}><>
    <Card className='m-3'>
    <Card.Img variant="top" src={yuji} />
    <Card.Body>
      <Card.Title>mageroni</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <div className='text-center'><Button variant='primary' onClick={()=>setModalShow(true)}>Add to Basket</Button></div>
      
    </Card.Body>
  </Card>

  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </>
      
  
  </Col>
        <Col md={6} lg={4}><>
    <Card className='m-3'>
    <Card.Img variant="top" src={foodone}  />
    <Card.Body>
      <Card.Title>Pepperoni</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <div className='text-center'><Button variant='primary' onClick={()=>setModalShow(true)}>Add to Basket</Button></div>
      
    </Card.Body>
  </Card>

  
      
  </></Col>
        <Col md={6} lg={4}><>
    <Card className='m-3'>
    <Card.Img variant="top" src={foodtwo} />
    <Card.Body>
      <Card.Title>Salza</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <div className='text-center'><Button variant='primary' onClick={()=>setModalShow(true)}>Add to Basket</Button></div>
      
    </Card.Body>
  </Card>

  
      
  </></Col>
     </Row>
     <Row>
        <Col md={6} lg={4}><>
    <Card className='m-3'>
    <Card.Img variant="top" src={foodthree} />
    <Card.Body>
      <Card.Title>VEG PIZZA</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <div className='text-center'><Button variant='primary' onClick={()=>setModalShow(true)}>Add to Basket</Button></div>
      
    </Card.Body>
  </Card>

  
      
  </></Col>
        <Col md={6} lg={4}><>
    <Card className='m-3'>
    <Card.Img variant="top" src={foodfour} />
    <Card.Body>
      <Card.Title>Shawarma</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <div className='text-center'><Button variant='primary' onClick={()=>setModalShow(true)}>Add to Basket</Button></div>
      
    </Card.Body>
  </Card>

  
      
  </></Col>
        <Col ><>
    <Card className='m-3'>
    <Card.Img variant="top" src={foodfive} />
    <Card.Body>
      <Card.Title>Chicken Burger</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <div className='text-center'><Button variant='primary' onClick={()=>setModalShow(true)}>Add to Basket</Button></div>
      
    </Card.Body>
  </Card>

  
      
  </></Col>
     </Row>
    </div>
    </Container>
  )
}

export default Column
