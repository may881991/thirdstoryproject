import React, { useState } from 'react';
import { getDocs, collection} from "firebase/firestore";
import { db } from '../../firebase.js';
import './Books.css';
import { Container, Row, Col ,Form ,Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
import treeImg from "../../assets/images/tree.png";
import puloneImg from "../../assets/images/pulone.png";

const Books = () => {
  const [bookdata , setData] = useState([]);
  window.addEventListener('load', () => {
    getUserData();
  });
  const getUserData = async ()=>{
      try{
        const userdb = collection(db, "books");
        const getData =  await getDocs(userdb);
        console.log(getData)
        getData.forEach((ele) => {
          var data = ele.data();
          setData(arr => [...arr , data]);
        });
      }catch(err){
        console.error(err.message)
      }
  }
  console.log(bookdata)
  return (
    <Container fluid className="ourBooks paddingZero">
      <Row className='mx-auto container'>
          <Col md={2} className="py-3">
            {<img src={treeImg} alt={treeImg} className="img-fluid"/> }
          </Col>
          <Col md={8} className="text-center bannerText">
          <h2>Our Books</h2>
          <p>Our books are written by Myanmar authors and illustrated by Myanmar illustrators for a Myanmar audience.  They are first and foremost entertaining and fun to read, but they also have important messages addressing peace, tolerance, diversity, girl empowerment, environment, disability rights and child rights. </p>
          <Form id='search' className='p-1 col-md-10 mx-auto'>
                <Form.Control type="email" placeholder="Explore More Books" className='text-center'/>
                <BsSearch />
          </Form>
          </Col>
          <Col md={2} className="py-3">
            {<img src={puloneImg} alt={puloneImg} className="img-fluid"/> }
          </Col>
      </Row>
      <Container className='bookLists pt-5'>
        <h4>Myanmar</h4>
        <Carousel variant="dark" className='my-5' indicators={false}>
          <Carousel.Item interval={20000}>
            <Row>
              {bookdata.map((data) => (
                  <BookFrame 
                  title={data.title} 
                  imgUrl={data.bookCover}/>
                ))
              }
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className='bookLists pb-5'>
        <h4>Bilingual (M/E)</h4>
        <Carousel variant="dark" className='my-5' indicators={false}>
          <Carousel.Item interval={20000}>
            <Row>
              {bookdata.map((data) => (
                  <BookFrame 
                  title={data.title} 
                  imgUrl={data.bookCover}/>
                ))
              }
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}

const BookFrame = ({title , imgUrl}) => {
  const coverUrl = require('../../assets/images/' + imgUrl);
  return (
      <Col md={2} className="px-2">
        <img className="d-block w-100" src={coverUrl} alt={coverUrl}/>
        <label>{title}</label>
      </Col>
  );
}

export default Books;