import React, { useState, useEffect } from 'react';
import NavBar from "../Nav/NavBar";
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import { Container, Row, Col } from "react-bootstrap";
import PIO1 from "../../assets/images/pio1.jpg";
import PIO3 from "../../assets/images/pio3.jpg";
import bgWYLK from "../../assets/images/WYLK1.png";
import puloneImg from "../../assets/images/pulone.png";
import jayImg from "../../assets/images/jayjay.png";
import './PassItOn.css';

function PassItOn() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
    }, []);
  
    if (loading) {
      return <Loading />;
    }
  
    return (
      <Container fluid className='sidebarBg paddingZero'>
        <NavBar bg="light"/>
        <Container fluid className='banner'>
          <Row>
            <Col md={2} className="py-3">
            </Col>
            <Col md={8} className="text-center bannerText">
              <h2>Pass It On: Bring Joy and Learning to Myanmar's Children</h2>
              <p className='storyText'>Every child deserves the chance to dream, learn, and grow – and you can make that happen!</p>
            </Col>
            <Col md={2}>
            {<img src={bgWYLK} alt="Background Yamin" className="bgItem2" />}
            </Col>
          </Row>
        </Container>
        <Container fluid className="paddingZero">
          <Container className=''>
            <Row className='py-5'>
            <Col lg={6} md={12}>
                {<img src={PIO3} alt="About" className="img-fluid pio-image" />}
              </Col>
              <Col lg={6} md={12} className="textBox">
                <div className='pt-5'>
                    <h2 className='passIton_title'>Myanmar's Education Crisis</h2>
                    <p className="py-4">Myanmar's children face an unprecedented education crisis. With over <b>7.8 million</b> children out of school, access to books has become one of the few ways to inspire hope and learning.</p>
                </div>
                
              </Col>
            </Row>
          </Container>
      
          <section className='py-5 together-section text-center'>
            <div className="together-overlay"></div>
            <Container className="together-content PassItOn">
                <Row className='text-center'>
                <Col lg={11} md={11} className='mx-auto'>
                    <h2 className="together-title">The Third Story Project: Our Solution</h2>
                    <p className="together-text text-light">
                    Since 2014, the Third Story Project (TSP) has been creating and distributing storybooks that teach peace, diversity, and life skills.</p>
                    <div className="together-text text-light">
                      <h3  className="mb-5"> We Empower:</h3> 
                      <ul className="text-start ms-5 ps-5">
                        <li>Teachers and Leaders: Through storytelling workshops to improve connections with communities. </li>
                        <li>Teens and Students: By coaching them to write and share their own stories, fostering self-expression and learning about their rights.</li>
                        <li>Together, we’ve distributed over 1.06 million books, and with your support, we can do even more.</li> 
                      </ul>
                    </div>
                </Col>
                </Row>
            </Container>
          </section>
          <Container className="my-5">
          <Row>
            <Col lg={6} className="mx-auto">
              <div className="how-to-help">
                <h3 className="mb-3 text-center">How You Can Help</h3>
                <div className="help-option mb-4">
                  <h5>We Pass It On for You</h5>
                  <p>Donate, and we’ll ensure your books reach the children who need them most.</p>
                </div>
                <div className="help-option mb-4">
                  <h5>Pass On a Library</h5>
                  <p>Empower an entire community by providing a Library in a Box with 60 books.</p>
                </div>
              </div>
             
            </Col>
            <Col lg={6} className="mx-auto mt-4">
                <img src={PIO1} alt="About" className="img-fluid pio-image" />
            </Col>
          </Row>
           
        </Container>
          <section className="pb-5 bg-light text-center">
              <Container>
              <Row>
                <Col lg={2} className="pt-5">
                    {<img src={jayImg} alt={jayImg} className="img-fluid" />}
                </Col>
                <Col lg={8} className="pt-5">
                    <h3 className="pb-3">Make a Difference Today</h3>
                    <p className="xs">Your contribution will directly help children in Myanmar enjoy books filled with fun, learning, and hope.</p>
                    <h4 className="p-3" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.15)' }}> Let’s pass it on and ensure every child has the chance to dream, learn, and grow!</h4>
                </Col>
                <Col lg={2} className="pt-5"> 
                    {<img src={puloneImg} alt={puloneImg} className="img-fluid"/> }
                </Col>
               </Row>
              </Container>
          </section>
        </Container>
        <Footer />
      </Container>
    );
  }

export default PassItOn;