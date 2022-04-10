import React from 'react';
import NavBar from "../Nav/NavBar";
import Footer from '../Footer/Footer';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft, BsBook, BsCartPlusFill } from "react-icons/bs";
import meesuImg from "../../assets/images/meesu.png";
import natImg from "../../assets/images/Natpauksi.png";
import "./BookDetails.css";

function BookDetails(){
    document.body.classList.add('bookDetail');
    const navigate = useNavigate();
    let bookInfo = localStorage.getItem('bookData');
    bookInfo = JSON.parse(bookInfo);
    console.log(bookInfo)
    let price = parseInt(bookInfo.price);
    function goBack(){
      localStorage.removeItem("bookData");
      navigate('/stories')
    }

    function readBook(){
      navigate('/read')
    }

    return(
        <Container fluid>
            <NavBar bg="light"/>
            <Container fluid className='banner'>
            <Row className='mx-auto container'>
                <Col md={2} className="py-3 meesuImg">
                  {<img src={meesuImg} alt={meesuImg} className="img-fluid"/> }
                </Col>
                <Col md={8} className="bookInfo">
                    <Button variant="link" onClick={goBack}> <BsArrowLeft />Back</Button>
                    <Row>
                      <Col md={4}>
                        {<img src={bookInfo.img} alt={"BookCover"} className="img-fluid"/> }
                      </Col>
                      <Col md={6} className="offset-md-1">
                        <h5>{bookInfo.title}</h5>
                        <p><label>Author : </label> {bookInfo.author}  </p>
                        <p><label>Illustrator : </label> {bookInfo.designer}  </p>
                        <p><label>Price : </label> {price} kyats</p>
                        <Button variant="outline-primary" onClick={readBook}> <BsBook /> Read </Button>
                        <Button variant="primary">  Add To Card <BsCartPlusFill /> </Button>
                      </Col>
                    </Row>
                </Col>
                <Col md={2} className="py-3">
                  {<img src={natImg} alt={natImg} className="img-fluid"/> }
                </Col>
            </Row>
            </Container>
            <Footer />
        </Container>
    )
}
export default BookDetails;