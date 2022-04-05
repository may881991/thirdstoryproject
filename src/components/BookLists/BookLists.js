import React from 'react';
import './BookLists.css';
import NavBar from "../Nav/NavBar";
import Card from "../Card/Card";
import { Container, Row, Col ,Form, ListGroup,Pagination } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Footer from '../Footer/Footer';
import treeImg from "../../assets/images/tree.png";
import squirrelImg from "../../assets/images/Squirrel1.png";
import rabbitImg from "../../assets/images/Rabbit1.png";
import bgYamin from "../../assets/images/yamin.png";
import book1Img from "../../assets/images/book1.png";
import book2Img from "../../assets/images/book2.png";
import book3Img from "../../assets/images/book3.png";
import book4Img from "../../assets/images/book4.png";
import book5Img from "../../assets/images/book5.png";

const data = [
  {
    title: "၀ါးပင်ငယ်ငယ် ချစ်စဖွယ်",
    price: "2500 K",
    creator : "ကာကြီး",
    rating: 4,
    author: "မောင်နော်လာဒ်",
    img: book1Img,
    bookUrl : "http://www.africau.edu/images/default/sample.pdf"
  },
  {
    title: "ပြင်ပရုပ်သွင်",
    price: "3000 K",
    creator : "ဖေသစ်တည်",
    rating: 4,
    author: "သံလွင်မြင့်",
    img: book2Img,
    bookUrl : "https://www.clickdimensions.com/links/TestPDFfile.pdf"
  },
  {
    title: "အိုအေစစ်လေး",
    price: "2500 K",
    creator : "သတိုးဆွေ",
    rating: 4,
    author: "ကံသာ",
    img: book3Img,
    bookUrl : "https://www.clickdimensions.com/links/TestPDFfile.pdf"
  },
  {
    title: "၀တ်ရည်လပ်ကီး",
    price: "2500 K",
    creator : "စိုင်းခမ်းလိန်",
    rating: 5,
    author: "သံလွင်မြင့်",
    img: book4Img,
    bookUrl : "http://www.africau.edu/images/default/sample.pdf"
  },
  {
    title: "ပီနိုကီယိုနဲ့ ယမင်း",
    price: "2500 K",
    creator : "၀လုံး",
    rating: 5,
    author: "သံလွင်မြင့်",
    img: book5Img,
    bookUrl : "http://www.africau.edu/images/default/sample.pdf"
  },
  {
    title: "၀ါးပင်ငယ်ငယ် ချစ်စဖွယ်",
    price: "2500 K",
    creator : "ကာကြီး",
    rating: 4,
    author: "မောင်နော်လာဒ်",
    img: book1Img,
    bookUrl : "http://www.africau.edu/images/default/sample.pdf"
  },
  {
    title: "ပြင်ပရုပ်သွင်",
    price: "2500 K",
    illustrator : "ဖေသစ်တည်",
    rating: 4,
    author: "သံလွင်မြင့်",
    img: book2Img,
    bookUrl : "https://www.clickdimensions.com/links/TestPDFfile.pdf"
  },
  {
    title: "အိုအေစစ်လေး",
    price: "2500 K",
    illustrator : "သတိုးဆွေ",
    rating: 4,
    author: "ကံသာ",
    img: book3Img,
    bookUrl : "https://www.clickdimensions.com/links/TestPDFfile.pdf"
  },
  {
    title: "၀တ်ရည်လပ်ကီး",
    price: "2500 K",
    illustrator : "စိုင်းခမ်းလိန်",
    rating: 5,
    author: "သံလွင်မြင့်",
    img: book4Img,
    bookUrl : "http://www.africau.edu/images/default/sample.pdf"
  },
  {
    title: "ပီနိုကီယိုနဲ့ ယမင်း",
    price: "2500 K",
    creator : "၀လုံး",
    rating: 5,
    author: "သံလွင်မြင့်",
    img: book5Img,
    bookUrl : "http://www.africau.edu/images/default/sample.pdf"
  }
];

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function BookLists() {
    return(
        <Container fluid className='sidebarBg'>
        <NavBar bg="light"/>
            <Container fluid className='banner'>
                <Row>
                    <Col md={2} className="py-3">
                    {<img src={treeImg} alt={treeImg} className="bannerImg1 img-fluid"/> }
                    </Col>
                    <Col md={8} className="text-center bannerText">
                    <h2>Our Book Lists</h2>
                    <p>Our books are written by Myanmar authors and illustrated by Myanmar creators for a Myanmar audience.  They are first and foremost entertaining and fun to read, but they also have important messages addressing peace, tolerance, diversity, girl empowerment, environment, disability rights and child rights. </p>
                    <Form id='search' className='p-1 col-md-10 mx-auto'>
                        <Form.Control type="email" placeholder="Search book titles and keywords" className='text-center'/>
                        <BsSearch />
                    </Form>
                    </Col>
                    <Col md={2} className="py-3">
                    {<img src={bgYamin} alt={bgYamin} className="bannerImg2 img-fluid"/> }
                    </Col>
                </Row>
            </Container>
            {<img src={squirrelImg} alt={squirrelImg} className="bgItem6" />}
            <Container className='bookItems'>
              <Row>
                <Col md={2}>
                  <h5>Categories</h5>
                  <hr/>
                  <ListGroup>
                    <ListGroup.Item>Burmese</ListGroup.Item>
                    <ListGroup.Item>English</ListGroup.Item>
                    <ListGroup.Item>Other Myanmar Language</ListGroup.Item>
                    <ListGroup.Item>Other Items</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={10} className="row">
                  {data.map((card, i) => {
                      return (
                        <Card
                          key={i}
                          img={card.img}
                          title={card.title}
                          price={card.price}
                          rating={card.rating}
                          author={card.author}
                          url={card.bookUrl}
                          designer={card.creator}
                        />
                      );
                    })}
                    <Pagination>
                      <Pagination.Prev />
                      {items}
                      <Pagination.Next />
                    </Pagination>
                </Col>
              </Row>
            </Container>
        {<img src={rabbitImg} alt={rabbitImg} className="bgItem7" />}
        <Footer />
        </Container>
    );
}

export default BookLists;