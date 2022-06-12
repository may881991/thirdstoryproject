import React, { useState } from 'react';
import './BookLists.css';
import NavBar from "../Nav/NavBar";
import Card from "../Card/Card";
import { Container, Row, Col ,Form, ListGroup, Pagination, Tab, Nav } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { db } from '../../firebase.js';
import { getDocs, collection} from "firebase/firestore";
import Footer from '../Footer/Footer';
import treeImg from "../../assets/images/tree.png";
import squirrelImg from "../../assets/images/Squirrel1.png";
import rabbitImg from "../../assets/images/Rabbit1.png";
import bgYamin from "../../assets/images/yamin.png";

function BookLists() {
  let data = localStorage.getItem('bookLists');
  let [bookdata , setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  if(data == null){
    window.addEventListener('load', () => {
      getBookData();
    });
  }else{
    bookdata = JSON.parse(data)
  }
  let active = 2;
  let items = [];
  for (let number = 1; number <= bookdata.length; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

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
  console.log(bookdata)

  if(bookdata !== null){
    const groupBylanguage = bookdata.reduce((group, value) => {
      const { language } = value;
      group[language] = group[language] ?? [];
      group[language].push(value);
      return group;
    }, {});
    console.log(groupBylanguage)

    const searchItems = (searchValue) => {
      console.log(searchValue)
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = bookdata.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(bookdata)
        }
    }
    console.log(filteredResults)
    return(
        <Container fluid className='sidebarBg paddingZero'>
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
                        <Form.Control type="email" placeholder="Search book titles and keywords" className='text-center'  onChange={(e) => searchItems(e.target.value)}/>
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
            <Tab.Container defaultActiveKey="Myanmar">
            <Row>
              <Col sm={2}>
                <h5>Categories</h5>
                  <hr/>
                <Nav variant="pills" className="flex-column">
                  {Object.entries(groupBylanguage).map(([item, index])=> (
                    <React.Fragment>
                    <Nav.Item>
                        <Nav.Link eventKey={item} key={index}>{item}</Nav.Link>
                    </Nav.Item>
                    </React.Fragment>
                  ))}
                </Nav>
              </Col>
              <Col sm={10}>
                {searchInput.length > 1 ? (
                    <Tab.Content className='mt-5'> 
                    <Tab.Pane eventKey={"Myanmar"} className="row">
                        {filteredResults.map((item, i) => {
                            const coverUrl = require('../../assets/images/' + item.bookCover);
                            return (
                              <React.Fragment>
                              <Card
                                key={i}
                                bookCover={coverUrl}
                                title={item.title}
                                price={item.price}
                                author={item.author}
                                bookUrl={item.bookUrl}
                                illustrator={item.illustrator}
                              />
                              </React.Fragment>
                            )
                        })}
                    </Tab.Pane>
                    </Tab.Content>
                ) : (
                    <Tab.Content className='mt-5'>
                      {Object.entries(groupBylanguage).map(([item,value])=> (
                        <React.Fragment>
                        <Tab.Pane eventKey={item} key={item} className="row">
                          {value.map((card, i) => {
                          const coverUrl = require('../../assets/images/' + card.bookCover);
                            return (
                              <React.Fragment>
                              <Card
                                key={i}
                                bookCover={coverUrl}
                                title={card.title}
                                price={card.price}
                                author={card.author}
                                bookUrl={card.bookUrl}
                                illustrator={card.illustrator}
                              />
                              </React.Fragment>
                            );
                          })}
                        </Tab.Pane>
                      </React.Fragment>
                      ))}
                    </Tab.Content>
                )}

                  <Pagination>
                      <Pagination.Prev />
                      {items}
                      <Pagination.Next />
                    </Pagination>
                </Col>
            </Row>
          </Tab.Container>
          </Container>
          {<img src={rabbitImg} alt={rabbitImg} className="bgItem7" />}
        <Footer />
        </Container>
    );
  }else{
    console.log("wait data");
    <Container fluid className='sidebarBg paddingZero'>
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
                    <Col md={4} className="px-2 ml-5">
                          <div className="card__image loading"></div>
                          <div className="card__title loading"></div>
                    </Col>
                    <Col md={4} className="px-2">
                          <div className="card__image loading"></div>
                          <div className="card__title loading"></div>
                    </Col>
                    <Col md={4} className="px-2">
                          <div className="card__image loading"></div>
                          <div className="card__title loading"></div>
                    </Col>
                    <Col md={4} className="px-2">
                          <div className="card__image loading"></div>
                          <div className="card__title loading"></div>
                    </Col>
                    <Col md={4} className="px-2">
                          <div className="card__image loading"></div>
                          <div className="card__title loading"></div>
                    </Col>
                    <Col md={4} className="px-2">
                          <div className="card__image loading"></div>
                          <div className="card__title loading"></div>
                    </Col>
                </Col>
              </Row>
            </Container>
        {<img src={rabbitImg} alt={rabbitImg} className="bgItem7" />}
        <Footer />
        </Container>
  }
}

export default BookLists;