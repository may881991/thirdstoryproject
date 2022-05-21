import React from 'react';
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../assets/images/Logo.png";
import profileImg from "../../assets/images/person.png";

function NavBar() {
  const [user] = useAuthState(auth);
  let location = useLocation();

  const addActiveClass = (path) => {
    return location.pathname.includes(path) ? "button" : "";
  };
  if(user){
    console.log(user.email)
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
              <Nav.Link className={`space-one ${addActiveClass("/stories")}`} href="/stories" > Stories </Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/activities")}`} href="/activities" > Activities</Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/about")}`} href="/about" > About Us</Nav.Link>
              <Nav.Link className={`space ${addActiveClass("/contact")}`} href="/contact" > Contact </Nav.Link>
              <div className='d-flex justify-content-end'>
                  <img alt={profileImg} src={profileImg}/>
                  <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                      {user.email}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Account Details</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
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
              <Nav.Link className={`space-one ${addActiveClass("/stories")}`} href="/stories" > Stories </Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/activities")}`} href="/activities" > Activities</Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/about")}`} href="/about" > About Us</Nav.Link>
              <Nav.Link className={`space ${addActiveClass("/contact")}`} href="/contact" > Contact </Nav.Link>
              <Nav.Link className="btn btn-outline-primary" href="/signup"> Sign Up </Nav.Link>
              <Nav.Link className="btn btn-primary" href="/login"> Log In </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

}

export default NavBar;
