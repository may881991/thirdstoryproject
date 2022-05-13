import React , { useState }from 'react';
import NavBar from "../Nav/NavBar";
import Footer from '../Footer/Footer';
import ListsView from "../Lists/Lists";
import { Container, Row, Col, Button , Offcanvas, ListGroup, OffcanvasTitle} from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft, BsBook, BsCartPlusFill , BsCart3} from "react-icons/bs";
import meesuImg from "../../assets/images/meesu.png";
import natImg from "../../assets/images/Natpauksi.png";
import "./BookDetails.css";
    let data = localStorage.getItem('bookData') ?  null : JSON.parse(localStorage.getItem("addToCart"));
function OffCanvasaddTo({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  let booksArr = [];
  let getBookLists;
  const addToCart= () => {
    console.log(data)
    setShow(true);
    let bookInfo = localStorage.getItem('bookData');
    getBookLists = JSON.parse(localStorage.getItem("addToCart"));
    if(getBookLists != null){
      getBookLists.push(bookInfo);
      data = getBookLists;
      localStorage.setItem('addToCart', JSON.stringify(getBookLists));
    }else{
      booksArr.push(bookInfo);
      localStorage.setItem('addToCart', JSON.stringify(booksArr));
    }
    return data;
  }
  if(data != null){
    return (
      <>
        <Button variant="primary" onClick={addToCart} className="me-2">
          {name} <BsCartPlusFill />
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <label><BsCart3 />  <span>{data.length}</span></label>
            <Offcanvas.Title>Your Books</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <ListGroup className='addToLists'>
            {data.map((book, i) => {
              let bookdata = JSON.parse(book);
              return (
                <ListsView
                  key={i}
                  count={i}
                  title={bookdata.title}
                  price={bookdata.price}
                />
              );
            })}
            </ListGroup>
          <OffcanvasTitle>SubTotal : </OffcanvasTitle>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }else{
    console.log(data)
    return (
      <>
          <Button variant="primary" onClick={addToCart} className="me-2">
            {name} <BsCartPlusFill />
          </Button>
      </>
    );
  }
}

function BookDetails(){
    document.body.classList.add('bookDetail');
    const navigate = useNavigate();
    let bookInfo = localStorage.getItem('bookData');
    bookInfo = JSON.parse(bookInfo);
    data = [localStorage.getItem('bookData')];
    let price = parseInt(bookInfo.price);
    function goBack(){
      localStorage.removeItem("bookData");
      navigate('/stories')
    }

    function readBook(){
      navigate('/read')
    }

    return(
        <Container fluid>
            <NavBar bg="light"/>
            <Container fluid className='banner'>
            <Row className='mx-auto container'>
                <Col md={2} className="py-3 meesuImg">
                  {<img src={meesuImg} alt={meesuImg} className="img-fluid"/> }
                </Col>
                <Col md={8} className="bookInfo">
                    <Button variant="link" onClick={goBack}> <BsArrowLeft />Back</Button>
                    <Row>
                      <Col md={4}>
                        {<img src={bookInfo.img} alt={"BookCover"} className="img-fluid"/> }
                      </Col>
                      <Col md={6} className="offset-md-1">
                        <h5>{bookInfo.title}</h5>
                        <p><label>Author : </label> {bookInfo.author}  </p>
                        <p><label>Illustrator : </label> {bookInfo.designer}  </p>
                        <p><label>Price : </label> {price} kyats</p>
                        <Button variant="outline-primary" onClick={readBook}> <BsBook /> Read </Button>
                        {['end'].map((placement, idx) => (
                          <OffCanvasaddTo key={idx} placement={placement} name={"Add To Card"} /> 
                        ))}
                      </Col>
                    </Row>
                </Col>
                <Col md={2} className="py-3">
                  {<img src={natImg} alt={natImg} className="img-fluid"/> }
                </Col>
            </Row>
            </Container>
            <Footer />
        </Container>
    )
}
export default BookDetails;