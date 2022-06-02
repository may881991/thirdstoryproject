import React, { useState } from 'react';
import { getDocs, collection} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase.js';
import './Books.css';
import { Container, Row, Col, Button  } from "react-bootstrap";
import { BsBook} from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';

const Books = () => {
  const navigate = useNavigate();
  const [bookdata , setData] = useState([]);
  window.addEventListener('load', () => {
    getBookData();
  });

  const getBookData = async ()=>{
      try{
        const userdb = collection(db, "books");
        const getData =  await getDocs(userdb);
        getData.forEach((ele) => {
          var data = ele.data();
          setData(arr => [...arr , data]);
        });
      }catch(err){
        console.error(err.message)
      }
  }
  const bookLists = () => {  
    navigate('/stories')
  }
  if(bookdata.length !== 0){
    // console.log(bookdata)
    localStorage.setItem('bookLists' , JSON.stringify(bookdata));
    const groupBylanguage = bookdata.reduce((group, value) => {
      const { language } = value;
      group[language] = group[language] ?? [];
      group[language].push(value);
      return group;
    }, {});

    return (
      <Container fluid className="ourBooks paddingZero">
         {Object.entries(groupBylanguage).map(([key,value])=> (
            <Container className='bookLists pt-5'>
            <h4>{key}</h4>
            <Carousel variant="dark" className='my-5' indicators={false}>
              <Carousel.Item interval={20000}>
                <Row>
                  {value.map((data) => (
                      <BookFrame
                      bookInfo={data}/>
                    ))
                  }
                </Row>
              </Carousel.Item>
            </Carousel>
          </Container>
         ))}
         <Container className="d-flex justify-content-center pb-5">
            <Button className='btn btn-primary' onClick={bookLists}> <BsBook /> See All Books</Button>
         </Container>
      </Container>
    );
  }else{
    return(
      <Container fluid className="ourBooks paddingZero">
        <Container className='bookLists py-5'>
          <Row>
            <Col md={2} className="px-2 ml-5">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
          </Row>
        </Container>
        <Container className='bookLists py-5'>
          <Row>
            <Col md={2} className="px-2 ml-5">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
            <Col md={2} className="px-2">
                  <div className="card__image loading"></div>
                  <div className="card__title loading"></div>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}


const BookFrame = ({bookInfo}) => {
  // console.log(bookInfo)
  const coverUrl = require('../../assets/images/' + bookInfo.bookCover);

  const navigate = useNavigate();
  const bookView = () => {  
    bookInfo.bookCover = require('../../assets/images/' + bookInfo.bookCover);
    localStorage.setItem("bookData",JSON.stringify(bookInfo));
    navigate('/bookDetails')
  }

  return (
      <Col md={2} className="px-2" onClick={bookView}>
        <img className="d-block w-100" src={coverUrl} alt={coverUrl}/>
        <label>{bookInfo.title}</label>
      </Col>
  );
}

export default Books;