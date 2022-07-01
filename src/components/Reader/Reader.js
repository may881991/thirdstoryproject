import React, { Component } from 'react';
import { Container, Row, Col, Button, Dropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { logout } from "../../firebase";
import { BsChevronLeft, BsChevronRight , BsArrowDownShort} from "react-icons/bs";
import logo from "../../assets/images/Logo.png";
import maskLogo from "../../assets/images/happyland.png";
import profileImg from "../../assets/images/user.png";
import "./Reader.css";

export default class ReaderView extends Component {
    state = { numPages: null, pageNumber: 0 , };

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	goToPrevPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
	goToNextPage = () => {
		this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
        console.log(this.state.pageNumber)
        if(this.state.pageNumber > 3){
            console.log(this.state.pageNumber)
        }
    }
    
    render() {
        const { pageNumber, numPages } = this.state;
        let userInfo = localStorage.getItem('user');
        userInfo = JSON.parse(userInfo);
        let bookInfo = localStorage.getItem('bookData');
        bookInfo = JSON.parse(bookInfo);
        // const pdfUrl = require('../../assets/books/' + bookInfo.bookUrl);
        console.log(bookInfo.bookUrl)
        return(
            <Container fluid className='Reader'>
                <nav className='d-flex justify-content-center pt-3'>
                    <img alt={logo} src={logo} className="logo"/>
                </nav>
                <Row className='py-5'>
                    <Col md={10} className="offset-md-1">
                        <Row>
                            <Col>
                                <Link to="/bookDetails"><button className="backBtn"><BsChevronLeft/></button></Link> <label> {bookInfo.title} </label>
                            </Col>
                            <Col className='text-center'>
                                <Button className="btn btn-primary downloadBtn d-none" href="#">
                                        Download <BsArrowDownShort/>
                                </Button>
                            </Col>
                            <Col className='d-flex justify-content-end'>
                                <img alt={profileImg} src={profileImg}/>
                                    {userInfo !== null ? (
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <label className='name'>{userInfo.displayName}</label> 
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {/* <Dropdown.Item href="#">Account Details</Dropdown.Item> */}
                                                <Dropdown.Item href="#" onClick={logout}>Log Out</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    ) : (
                                        <label className='name'></label>
                                    )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='align-items-center readerView'>
                    <Col md={1} className="arrow">
                        <BsChevronLeft onClick={this.goToPrevPage}/>
                    </Col>
                    <Col md={10}>
                        <Document file={bookInfo.bookUrl} onLoadSuccess={this.onDocumentLoadSuccess} width={500}>
                            <Page pageNumber={pageNumber+1} />
                            <div className='overlay'> <img alt={maskLogo} src={maskLogo}/></div>
                        </Document>
                    </Col>
                    <Col md={1} className="arrow">
                        <BsChevronRight onClick={this.goToNextPage}/>
                    </Col>
                </Row>

                <p className='pageNum'>
                    Page {pageNumber+1} of {numPages}
                </p>
            </Container>
        );
	}
}