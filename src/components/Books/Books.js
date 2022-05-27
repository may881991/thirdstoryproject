import React, { useState } from 'react';
import { getDocs, collection} from "firebase/firestore";
import { db } from '../../firebase.js';
import './Books.css';
import { Container, Row, Col  } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

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
  if(bookdata.length != 0){
    return (
      <Container fluid className="ourBooks paddingZero">
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
  }else{
    return(
      <Container fluid className="ourBooks paddingZero">
        <Container className='bookLists py-5'>
          <Row>
            <Col md={2} className="px-2 ml-5">
                  <div class="card__image loading"></div>
                  <div class="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div class="card__image loading"></div>
                  <div class="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div class="card__image loading"></div>
                  <div class="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div class="card__image loading"></div>
                  <div class="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div class="card__image loading"></div>
                  <div class="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div class="card__image loading"></div>
                  <div class="card__title loading"></div>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

const BookFrame = ({title , imgUrl}) => {
  console.log(title)
  const coverUrl = require('../../assets/images/' + imgUrl);
  return (
      <Col md={2} className="px-2">
        <img className="d-block w-100" src={coverUrl} alt={coverUrl}/>
        <label>{title}</label>
      </Col>
  );
}

export default Books;