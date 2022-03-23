import React from 'react';
import NavBar from "../Nav/NavBar";
import { Container, Row, Col ,Button } from "react-bootstrap";
import './Home.css';

function Home() {
  return (
    <Container fluid className="home">
        <NavBar bg="light" />
        <Container>
            <Row>
                <Col md={6} className="py-5">
                <h1>Third Story Project</h1>
                <p className='col-lg-7 py-5'>The Third Story Project creates children's books  with a positive message for children in Myanmar, written and illustrated by Myanmar artists. </p>
                <Button className="btn btn-primary" href="/about">
                    Read More
                </Button>
                </Col>
            </Row>
        </Container>
    </Container>
  );
}

export default Home;
