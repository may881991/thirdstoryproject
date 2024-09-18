import React, { useState, useEffect } from 'react';
import './Activities.css';
import { getActivityData } from '../../firebase.js';
import NavBar from "../Nav/NavBar";
import Loading from '../Loading/Loading';
import { Container, Row, Col , ListGroup, Card } from "react-bootstrap";
import Footer from '../Footer/Footer';
import treeImg from "../../assets/images/tree.png";
import py1 from "../../assets/images/py1.png";

function Activities(){
    const [loading, setLoading] = useState(true)
    let [data , setData] = useState([]);
    useEffect(() => {
        getActivityData().then((lists) => {
          lists.forEach((ele) => {
            var data = ele.data();
            setData(arr => [...arr , data]);
            setTimeout(() => setLoading(false), 500)
          });
        }).catch(() => setLoading(false));
    }, [])
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
                    <h2>Articles & Activities</h2>
                    <p className='px-5'>The Third Story Project offers a variety of trainings for different groups. Working with the Myanmar Storytellers and other talented professionals, we help people understand the power of storytelling.</p>
                    </Col>
                    <Col md={2}>
                    {<img src={py1} alt={py1} className="bannerImg3 img-fluid"/> }
                    </Col>
                </Row>
            </Container>
            <Container className='activitiesLists'>
              <Row>
                <Col md={2}>
                  <h5>Categories</h5>
                  <hr/>
                  <ListGroup>
                    <ListGroup.Item>Articles & Activities</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={10} className="row">
                  {data.map((card, i) => {
                    console.log(card)
                      return (
                        i % 2 == 0 ?  
                          <Row className='storyBox'>
                              <Col md={8}>
                                <h4>{card.title}</h4>
                                 {card.description.split("\n").map((para,index) => ( 
                                    <p className="article-para" key={index}>{para}</p>
                                 ))}
                              </Col>
                              <Col md={4}>
                                {<img src={card.image} alt={card.image} className="img-fluid"/> }
                                <label className="p-3">{card.date}</label>
                              </Col>
                          </Row>
                        :
                          <Row className='storyBox'>
                              <Col md={4}>
                                {<img src={card.image} alt={card.image} className="img-fluid"/> }
                                <label className="p-3">{card.date}</label>
                              </Col>
                              <Col md={8}>
                                <h4>{card.title}</h4>
                                {card.description.split("\n").map((para,index) => ( 
                                    <p className="article-para" key={index}>{para}</p>
                                 ))}
                              </Col>
                          </Row>
                      );
                    })}
                </Col>
              </Row>
            </Container> 
         <Footer />
        </Container>
      ) : (
        <Loading />
      )}
      </>
    );
}

export default Activities;