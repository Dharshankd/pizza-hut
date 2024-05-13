import React from 'react'
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function Orders() {
  return (
    <ListGroup as="ol" numbered>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Large Pizza</div>
        Just Now
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Cheese Burger</div>
        Delivered in 2mins
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Shawarma roll</div>
         delivered in 5 mins
      </div>
      <Badge bg="primary" pill>
        3
      </Badge>
    </ListGroup.Item>
    <div className="text-end mt-4" >
        <Button variant='primary'>Check Out</Button>
    </div>
  </ListGroup>
  )
}

export default Orders
