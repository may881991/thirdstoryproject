import React from 'react';
import './Home.css';
import NavBar from "../Nav/NavBar";
import Books from '../Books/Books';
import Customers from '../Customers/Customers';
import Help from '../Help/Help';
import Footer from '../Footer/Footer';
import { Container, Row, Col ,Button } from "react-bootstrap";
import bannerImg from "../../assets/images/banner-img1.png";
import bgWYLK from "../../assets/images/WYLK1.png";
import bgYamin from "../../assets/images/yamin.png";
import aboutImg from "../../assets/images/aboutus.png";
import trainingImg from "../../assets/images/ourtraining.png";

function Home() {
  return (
    <Container fluid>
        <Container>
          <NavBar bg="light"/>
        </Container>
        <section className="home">
            <Row className='mx-auto container'>
                <Col md={6} className="py-5">
                <h1>Third Story Project</h1>
                <p className='col-lg-8 py-5'>The Third Story Project creates children's books  with a positive message for children in Myanmar, written and illustrated by Myanmar artists. </p>
                <Button className="btn btn-primary" href="/about">
                    Read More
                </Button>
                </Col>
                <Col md={6} className="pb-5 mb-5">
                  {<img src={bannerImg} alt={bannerImg}  className="img-fluid"/> }
                </Col>
            </Row>
        </section>
        <Books />
        <Container fluid className="aboutUs">
          {<img src={bgWYLK} alt={bgWYLK} className="bgItem1" />}
          <Container className=' py-5'>
            <Row className='py-5'>
              <Col lg={6} md={12}>
                {<img src={aboutImg} alt={aboutImg}/> }
              </Col>
              <Col lg={6} md={12} className="textBox">
                  <h2>About Us</h2>
                  <p className="py-4">The Third Story Project, a collaborative effort between the <b>Myanmar Storytellers </b>and the <b>Benevolent Youth Association </b>(Yangon), creates and produces children’s books in <b>Burmese and other Myanmar languages </b>to distribute free of charge to children around Myanmar. The stories are written and illustrated by Myanmar artists for a Myanmar audience and address issues of <b>peace, tolerance, diversity, gender, environment and child rights.</b></p>
                  <a className="btn btn-outline-primary" href="https://www.google.com/">
                      Read More
                    </a>
              </Col>
            </Row>
            {<img src={bgYamin} alt={bgYamin} className="bgItem2" />}
            <Row className='py-5'>
              <Col lg={6} md={12}>
                  <h2>Our Trainings</h2>
                  <p className="col-lg-11 py-5">We also offer storyteller trainings to <b>community leaders, teachers, volunteers and religious leaders </b>so they can use storytelling in their work to better connect with the people they serve. Additionally, we work with young students to educate them about child rights and storytelling. We coach teens on how to create their own stories, offering them an outlet to express themselves in a constructive way.</p>
                  <a className="btn btn-outline-primary" href="https://www.google.com/">
                      See More
                    </a>
              </Col>
              <Col lg={6} md={12} className="textBox">
                {<img src={trainingImg} alt={trainingImg} /> }
              </Col>
            </Row>
          </Container>
        </Container>
        <Customers />
        <Help />
        <Footer />
    </Container>
  );
}

export default Home;
