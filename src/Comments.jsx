import React from 'react'
import { Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap'

function Comments() {
  return (
    <div className='bg-light mt-5' >
        <div className="text-center my-3 py-3" >
            <h2 className="text-primary ">Comments <i class="bi bi-chat-left-heart"></i></h2>
        </div>
      
      <Container>
        <Row className='justify-content-center'>
            <Col md={6}>
                <Form>
                <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-paper"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      </InputGroup>
                   
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-person"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Enter your name"
        
      >
        <Form.Control type="name" placeholder="name" />
      </FloatingLabel>
      </InputGroup>

      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>

                </Form>
            </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Comments
