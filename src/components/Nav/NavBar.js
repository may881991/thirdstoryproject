import React , { useEffect, useState } from 'react';
import { auth , logout} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Badge } from "react-bootstrap";
import {BsCart3} from "react-icons/bs";
import { getUserData } from "../../firebase";
import "./NavBar.css";
import logo from "../../assets/images/Logo.png";
import profileImg from "../../assets/images/user.png";

function NavBar() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    getUserData(user).then((user) => {
      user.forEach((ele) => {
        var userData = ele.data();  
        setUserData(userData)
      });
  }).catch((err) => console.log(err)); 
  }, []);

  let location = useLocation();
  let totalBookCount = 0;
  let getBookLists = localStorage.getItem('addToCart');
  if(getBookLists !== null){
    getBookLists = JSON.parse(getBookLists);
    getBookLists.forEach(function(book){
      totalBookCount += book.count;
    })
  }
  const addActiveClass = (path) => {
    return location.pathname.includes(path) ? "active" : "";
  };
  const navigate = useNavigate();
  const gotoOrder = () => { 
    navigate('/order')
  }

  const gotoBookLists = () => { 
    navigate('/stories')
  }

  const gotoActivities = () => { 
    navigate('/activities')
  }

  const gotoAbout = () => { 
    navigate('/about')
  }

  const gotoLogin = () => { 
    navigate('/login')
  }

  const gotoSignUp = () => { 
    navigate('/signup')
  }

  if(userData !== null){
    localStorage.setItem('user' , JSON.stringify(userData));
    return (
      <Navbar expand="lg" className="fixed-top shadow-sm">
        <Container className="nav-container">
          <Navbar.Brand href="#home">
            <img alt={logo} src={logo} className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-items align-items-center justify-content-end">
              <Nav.Link className={`space ${addActiveClass("/")}`} href="/"> Home </Nav.Link>
              <Nav.Link className={`space-one ${addActiveClass("/stories")}`} onClick={gotoBookLists}> Stories </Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/activities")}`} onClick={gotoActivities}> Activities</Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/about")}`} onClick={gotoAbout}> About Us</Nav.Link>
              {/* <Nav.Link className={`space ${addActiveClass("/contact")}`} href="/contact" > Contact </Nav.Link> */}
              <div className='d-flex justify-content-end profile'>
                  <img alt={profileImg} src={profileImg} className="profileImg"/>
                  <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                      <label className='name'>{userData.name}</label>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                          {/* <Dropdown.Item href="#">Account Details</Dropdown.Item> */}
                          <Dropdown.Item href="#" onClick={logout}>Log Out</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                  <label onClick={gotoOrder} className="addTobasket"><BsCart3 /> {totalBookCount > 1 && (<Badge bg="info" pill>{totalBookCount}</Badge>)}</label>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }else{
    return (
      <Navbar expand="lg" className="fixed-top shadow-sm">
        <Container className="nav-container">
          <Navbar.Brand href="#home">
            <img alt={logo} src={logo} className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-items align-items-center justify-content-end">
              <Nav.Link className={`space ${addActiveClass("/home")}`} href="/"> Home </Nav.Link>
              <Nav.Link className={`space-one ${addActiveClass("/stories")}`} onClick={gotoBookLists}> Stories </Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/activities")}`} onClick={gotoActivities}> Activities</Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/about")}`} onClick={gotoAbout}> About Us</Nav.Link>
              {/* <Nav.Link className={`space ${addActiveClass("/contact")}`} href="/contact" > Contact </Nav.Link> */}
              <Nav.Link className="btn btn-outline-primary" onClick={gotoSignUp}> Sign Up </Nav.Link>
              <Nav.Link className="btn btn-primary" onClick={gotoLogin}> Log In </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

}

export default NavBar;
