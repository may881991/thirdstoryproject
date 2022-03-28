import React from 'react';
import './Help.css';
import * as Icon from 'react-bootstrap-icons';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import jayImg from "../../assets/images/jayjay.png";
import helpImg1 from "../../assets/images/help1.png";
import helpImg2 from "../../assets/images/help2.png";
import helpImg3 from "../../assets/images/help3.png";

function Help() {
    return(
        <Container fluid className="helpSection">
            <Container>
            <h2 className='text-center'>How You Can Help!</h2>
            <Row className="py-5">
                <Col lg={4}>
                    <Card>
                    <Card.Img variant="top" src={helpImg1} />
                    <Card.Body>
                        <Card.Title>Buy Our Books</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Read More <Icon.ArrowRight /></Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                    <Card.Img variant="top" src={helpImg2} />
                    <Card.Body>
                        <Card.Title>Pass it On</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Read More <Icon.ArrowRight /></Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                    <Card.Img variant="top" src={helpImg3} />
                    <Card.Body>
                        <Card.Title>Bring a Bag of Books</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Read More <Icon.ArrowRight /></Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className='d-flex justify-content-center pb-5'>
              <Button className="btn btn-primary downloadBtn" href="#">
                      Download Now!
                </Button>
            </div>

            {<img src={jayImg} alt={jayImg} className="bgItem4" />}
            </Container>
        </Container>
    );
}
export default Help;