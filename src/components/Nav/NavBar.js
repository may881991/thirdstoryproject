import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/images/Logo.png";
import "./NavBar.css";
import { useLocation } from "react-router-dom";

function NavBar() {
  let location = useLocation();

  const addActiveClass = (path) => {
    return location.pathname.includes(path) ? "button" : "";
  };

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
            <Nav.Link className={`space-one ${addActiveClass("/courses")}`} href="/courses" > Stories </Nav.Link>
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

export default NavBar;
