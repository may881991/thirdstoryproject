import React from 'react';
import { Card, Button } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import "./Card.css";

function Cardlayout(props){
  return (
    <Card className="col-md-4">
      <Card.Body className="">
        <Card.Img variant="top" src={props.img} />
        <Card.Title className="">
          {props.title}
          <span className="age-group">{props.price}</span>
        </Card.Title>
          <Card.Link href="#">{props.author}</Card.Link>
          <Card.Link href="#" className='float-end'><BsCart3 /></Card.Link>
      </Card.Body>
      <Button className="buyBtn" variant="outline-primary">
        Buy Now!
      </Button>
    </Card>
  );
}

export default Cardlayout;
