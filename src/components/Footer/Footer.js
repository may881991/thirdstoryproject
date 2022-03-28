import React from 'react';
import './Footer.css';
import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../../assets/images/f-logo.png";
import boxItem from "../../assets/images/bgBox.png";

function Footer() {
    return(
        <Container fluid className="footer">
            {<img src={boxItem} alt={boxItem}  className="bgItem5" />}
            <Container className="py-5">
                <Row>
                    <Col lg={3} md={12}>
                        <h5>{<img src={footerLogo} alt={footerLogo}/>} Third Story Project</h5>
                        <p>We are a non-profit social enterprise, registered as a business and publisher in Myanmar.</p>
                        <label>©thirdstory 2022. All rights reserved</label>
                    </Col>
                    <Col lg={3} md={12} className="px-5">
                        <h5 className='secTitle'>Our Stories</h5>
                        <ul>
                            <li><a href='https://www.google.com/'>About Us</a></li>
                            <li><a href='https://www.google.com/'>Happy Customer</a></li>
                            <li><a href='https://www.google.com/'>Our Activities</a></li>
                            <li><a href='https://www.google.com/'>Apps</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={12}>
                        <h5 className='secTitle'>Shops</h5>
                        <ul>
                            <li><a href='https://www.google.com/'>Yangon</a></li>
                            <li><a href='https://www.google.com/'>Mandalay</a></li>
                            <li><a href='https://www.google.com/'>Shan State</a></li>
                            <li><a href='https://www.google.com/'>Kayin State</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={12}>
                        <h5>Contact Us</h5>
                        <label>thirdstorychildrenbooks@gmail.com</label>
                        <label>No. 86, 52 Street, Middle Block, </label>
                        <label>Yangon, Myanmar (Burma)</label>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
    
export default Footer;