import React , { useRef } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import NavBar from "../Nav/NavBar";
import "./Order.css";

function OrderConfirmed(){
  let data = JSON.parse(localStorage.getItem('addToCart'));
  let subTotal = 0;
  console.log(data);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    var gethtml = document.getElementById("orderLists").innerHTML;
    var getTemplate = document.getElementById("htmlTemplate")
    getTemplate.value += gethtml;
    console.log(form.current)
    emailjs.sendForm('service_hicz56n', 'template_pohsi8l', form.current, 'LkA6BCTBIux5qO0KS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <Container fluid className='paddingZero orderForm'>
      <NavBar bg="light"/>
      <Container className='py-5'>
        <Row className='py-5'>
          <Col md={6} className="orderSummary" id="orderLists">
            <h3>Order Summary</h3>
            <ListGroup className='addToLists col-md-10'>
            {data.map((book, i) => {
              subTotal += parseInt(book.subTotal);
              return(
                <ListGroup.Item key={i} style={{"border-bottom": "1px solid"}}>
                  <span className='addNum' style={{"padding-right": "0.5rem","border-right": "1px solid"}}>{i + 1}</span>
                  <label className='addTitle' style={{"width": "300px","padding-left": "10px","display": "inline-block"}}>{book.title} </label>
                  <label  style={{"width": "80px"}}> x {book.count} </label>
                  <label style={{"width": "100px","padding-left": "10px","display": "inline-block"}}>
                    <span>{book.price} K</span>
                  </label>
                </ListGroup.Item>
              );
            })}
            <Row>
              <Col style={{"width": "220px","display": "inline-block"}}></Col>
              <Col style={{"width": "180px","display": "inline-block"}}>
                <p><label style={{"width": "80px","display": "inline-block"}}>SubTotal </label> : <label style={{"width": "100px","padding-left": "10px","display": "inline-block","text-align": "right"}}>{subTotal} K</label></p>
                <p><label style={{"width": "80px","display": "inline-block"}}>Delivery </label> : <label style={{"width": "100px","padding-left": "10px","display": "inline-block","text-align": "right"}}>1000 K </label></p>
              </Col>
            </Row>
            <Row className='total'>
              <Col style={{"width": "220px","display": "inline-block"}}></Col>
              <Col style={{"width": "180px","display": "inline-block"}}>
                <p><label style={{"width": "80px","display": "inline-block"}}>Total </label> : <label style={{"width": "100px","padding-left": "10px","display": "inline-block","text-align": "right"}}> {subTotal + 1000} K </label></p>
              </Col>
            </Row>
            </ListGroup>
          </Col>
          <Col md={6}>
            <h3>Customer Information</h3>
            <Form className="infoForm" ref={form} onSubmit={sendEmail} id="submitForm">
              <Form.Group className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="user_name"/>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="user_email"/>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" name="user_phone" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your address" name="user_address"/>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message to Third Sory" name="message"/>
              </Form.Group> 
              <Form.Group className="mb-4 d-none">
                <Form.Label>Order lists</Form.Label>
                <Form.Control as="textarea" rows={3} id="htmlTemplate" name="my_html"/>
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
