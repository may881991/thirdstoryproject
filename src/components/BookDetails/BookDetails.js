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

let subTotal = 0;
let data = localStorage.getItem('addToCart');
if(data == null){
  data = [];
}else{
  data = JSON.parse(localStorage.getItem('addToCart'));
}
console.log(data)
let checkBookName;
let bookArr = [];
function OffCanvasaddTo({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const addToCart= () => {
    setShow(true);
    let bookInfo = localStorage.getItem('bookData');
    let bookInfoObj = JSON.parse(bookInfo);
    bookInfoObj.count = 1;
    console.log(bookInfoObj)
    let getBookName = bookInfoObj.title;
    let getPrice = bookInfoObj.price;
    bookInfoObj.subTotal = parseInt(getPrice);
    subTotal += parseInt(getPrice);
    checkBookName = bookArr.includes(getBookName);
    bookArr.push(getBookName);
    console.log(bookArr)
    const bookCounts = {};
    for (const num of bookArr) {
      bookCounts[num] = bookCounts[num] ? bookCounts[num] + 1 : 1;
    }
    console.log(checkBookName)
    if(data != null && checkBookName == false){
      data.push(bookInfoObj);
      localStorage.setItem('addToCart', JSON.stringify(data));
      return data;
    }else{
      console.log(bookCounts);
      let updateData = [];
      data.map(obj => {
        if(obj.title == getBookName){
          obj.count = bookCounts[getBookName];
          obj.subTotal += parseInt(getPrice);
          updateData.push(obj)
        }else{
          updateData.push(obj)
        }
      })
      localStorage.setItem('addToCart', JSON.stringify(updateData));
      data = updateData;
      console.log(data)
      return data;
    }
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
              console.log(book)
              return (
                <ListsView
                  key={i}
                  num={i}
                  count={book.count}
                  title={book.title}
                  price={book.subTotal}
                />
              );
            })}
            </ListGroup>
          <OffcanvasTitle>SubTotal : <label>{subTotal} K</label></OffcanvasTitle>
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
    console.log(bookInfo)
    bookInfo = JSON.parse(bookInfo);
    let price = parseInt(bookInfo.price);
    function goBack(){
      localStorage.removeItem("bookData");
      navigate('/stories')
    }

    function readBook(){
      navigate('/read')
    }

    return(
        <Container fluid className='paddingZero'>
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
                        {<img src={bookInfo.bookCover} alt={"BookCover"} className="img-fluid"/> }
                      </Col>
                      <Col md={6} className="offset-md-1 pt-5">
                        <h5>{bookInfo.title}</h5>
                        <p><label>Author : </label> {bookInfo.author}  </p>
                        <p><label>Illustrator : </label> {bookInfo.illustrator}  </p>
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