import React, { useState, useEffect } from 'react';
import './BookLists.css';
import NavBar from "../Nav/NavBar";
import Card from "../Card/Card";
import Loading from '../Loading/Loading';
import { Container, Row, Col ,Form, ListGroup, Pagination, Tab, Nav } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { getBookData } from '../../firebase.js';
import Footer from '../Footer/Footer';
import treeImg from "../../assets/images/tree.png";
import squirrelImg from "../../assets/images/Squirrel1.png";
import rabbitImg from "../../assets/images/Rabbit1.png";
import bgYamin from "../../assets/images/yamin.png";

function BookLists() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 1000)
  }, [])

  const { isLoading, bookdata } = GetBookLists();
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  let active = 1;
  let items = [];
  const itemsGroup = bookdata.length / 8;
  for (let number = 1; number <= itemsGroup; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  if (isLoading == true) {
    let itemLeng = [ 1, 2, 3, 4, 5, 6];
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

                  {itemLeng.map((item) => (
                    <Col md={4} className="px-2 ml-5"  key={item}>
                          <div className="card__image loading"></div>
                          <div className="card__title loading"></div>
                    </Col>
                      ))
                  }
                </Col>
              </Row>
            </Container>
          {<img src={rabbitImg} alt={rabbitImg} className="bgItem7" />}
        <Footer />
    </Container>
    )
  }else{

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
    return(
      <>
        {loading === false ? (
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
                    <Nav.Item key={index}>
                        <Nav.Link eventKey={item}>{item}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={10}>
                {searchInput.length > 1 ? (
                    <Tab.Content className='mt-5' key={"tab01"}> 
                      <Tab.Pane eventKey={"Myanmar"} key={"Myanmar"} className="row">
                          {filteredResults.map((item, i) => {
                              const coverUrl = require('../../assets/images/' + item.bookCover);
                              return (
                                <Card
                                  key={i}
                                  bookCover={coverUrl}
                                  title={item.title}
                                  price={item.price}
                                  author={item.author}
                                  bookUrl={item.bookUrl}
                                  illustrator={item.illustrator}
                                />
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
                              <Card
                                key={i}
                                bookCover={coverUrl}
                                title={card.title}
                                price={card.price}
                                author={card.author}
                                bookUrl={card.bookUrl}
                                illustrator={card.illustrator}
                              />
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
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

// getBookLists
function GetBookLists() {
  const [isLoading, setIsLoading] = useState(false);
  let [bookdata , setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    var checkBookLists = localStorage.getItem('bookLists');
    if(checkBookLists.length > 2){  
      setData(JSON.parse(checkBookLists));
      setIsLoading(false);
    }else{
      console.log("else")
      getBookData().then((lists) => {
        lists.forEach((ele) => {
          var data = ele.data();
          setData(arr => [...arr , data]);
          setIsLoading(false);
        });
      }).catch(() => setIsLoading(false));
    }
  }, []);
  return { isLoading, bookdata };
}

export default BookLists;