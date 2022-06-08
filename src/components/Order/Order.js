import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../Nav/NavBar";
import "./Order.css";

function OrderConfirmed(){
  let data = JSON.parse(localStorage.getItem('addToCart'));
  console.log(data)

  return (
    <Container fluid className='paddingZero orderForm'>
      <NavBar bg="light"/>
      <Container>
        <Row className='py-5'>
          <Col md={6} className="orderSummary">
            <h3>Order Summary</h3>
          </Col>
          <Col md={6}>
          <Form className='infoForm'>
            <h3>Customer Information</h3>

            <Form.Group className="mb-4">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className="text-center">
                <Button variant="primary" type="submit">
                  Complete Your Order
                </Button>
                <p className='py-3 signUpText'> Already have an account? <Link to="/login"> Login Here!</Link></p>
            </div>
            </Form>
          </Col>
        </Row>
      </Container>
     </Container>
  );
}

export default OrderConfirmed;
