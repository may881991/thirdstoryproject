import React from 'react';
import { Container } from "react-bootstrap";
import NavBar from "../Nav/NavBar";
import "./Order.css";

function OrderConfirmed(props){
  
  console.log(props)

  return (
    <Container fluid className='paddingZero'>
      <NavBar bg="light"/>
      <h3>OrderConfirmed</h3>
     </Container>
  );
}

export default OrderConfirmed;
