import React, { Component } from 'react';
import { Container, Row, Col, Button, Dropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { BsChevronLeft, BsChevronRight , BsArrowDownShort} from "react-icons/bs";
import logo from "../../assets/images/Logo.png";
import profileImg from "../../assets/images/person.png";
import pdfUrl from "../../assets/books/No-Nonsense Buddhism for Beginners.pdf";
import "./Reader.css";

export default class ReaderView extends Component {
    state = { numPages: null, pageNumber: 1 };

	onDocumentLoadSuccess = ({ numPages }) => {
        console.log(numPages)
		this.setState({ numPages });
	};

	goToPrevPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
	goToNextPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
    
    render() {
        const { pageNumber, numPages } = this.state;
        let bookInfo = localStorage.getItem('bookData');
        bookInfo = JSON.parse(bookInfo);

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
                                <Button className="btn btn-primary downloadBtn" href="#">
                                        Download <BsArrowDownShort/>
                                </Button>
                            </Col>
                            <Col className='d-flex justify-content-end'>
                                <img alt={profileImg} src={profileImg}/>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Pwint Ni Ni
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Account Details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='align-items-center readerView'>
                    <Col md={1} className="arrow">
                        <BsChevronLeft onClick={this.goToPrevPage}/>
                    </Col>
                    <Col md={10}>
                        <Document file={pdfUrl} onLoadSuccess={this.onDocumentLoadSuccess} width={500}>
                            <Page pageNumber={pageNumber} />
                            <Page pageNumber={pageNumber+1} />
                        </Document>
                    </Col>
                    <Col md={1} className="arrow">
                        <BsChevronRight onClick={this.goToNextPage}/>
                    </Col>
                </Row>

                <p className='pageNum'>
                    Page {pageNumber + 1} of {numPages}
                </p>
            </Container>
        );
	}
}