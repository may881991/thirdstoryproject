import React from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../Nav/NavBar";
import "./Order.css";

function OrderConfirmed(){
  let data = JSON.parse(localStorage.getItem('addToCart'));
  let subTotal = 0;
  console.log(data);

  return (
    <Container fluid className='paddingZero orderForm'>
      <NavBar bg="light"/>
      <Container className='py-5'>
        <Row className='py-5'>
          <Col md={6} className="orderSummary">
            <h3>Order Summary</h3>
            <ListGroup className='addToLists col-md-10'>
            {data.map((book, i) => {
              subTotal += parseInt(book.subTotal);
              return(
                <ListGroup.Item key={i}>
                  <span className='addNum'>{i + 1}</span>
                  <label className='addTitle'>{book.title} </label>
                  <label  className='ptitle'> x {book.count} </label>
                  <label className='price'>
                    <span>{book.price} K</span>
                  </label>
                </ListGroup.Item>
              );
            })}
            <Row>
              <Col md={6}></Col>
              <Col md={5}>
                <p><label className='ptitle'>SubTotal </label> : <label className='price'>{subTotal} K</label></p>
                <p><label className='ptitle'>Delivery </label> : <label className='price'>1000 K </label></p>
              </Col>
            </Row>
            <Row className='total'>
              <Col md={6}></Col>
              <Col md={5}>
                <p><label className='ptitle'>Total </label> : <label className='price'> {subTotal + 1000} K </label></p>
              </Col>
            </Row>
            </ListGroup>
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
              <Form.Control as="textarea" rows={3} placeholder="Enter your address" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message to Third Sory"/>
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
