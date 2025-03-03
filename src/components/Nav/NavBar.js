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
      if(user !== null){ 
        user.forEach((ele) => {
          var userData = ele.data();  
          setUserData(userData)
        });
      }
   }).catch((err) => console.log(err)); 
 }, [user]);

  let location = useLocation();
  let totalBookCount = 0;
  let getBookLists = localStorage.getItem('addToCart');
  if(getBookLists !== null){
    getBookLists = JSON.parse(getBookLists);
    getBookLists.forEach(function(book){
      totalBookCount += book.count;
    })
  }
  console.log(totalBookCount)
  const addActiveClass = (path) => {
    return location.pathname === path ? "active" : "";
  };
  const navigate = useNavigate();
  const gotoHome = () => { 
    navigate('/')
  }

  const gotoOrder = () => { 
    navigate('/order')
  }

  const gotoBookLists = () => { 
    navigate('/books')
  }

  const gotoActivities = () => { 
    navigate('/activities')
  }

  const gotoGallery = () => { 
    navigate('/gallery')
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

  const gotoStoires = () => { 
    navigate('/stories')
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
              <Nav.Link className={`space ${addActiveClass("/")}`} onClick={gotoHome}> Home </Nav.Link>
              <Nav.Link className={`space-one ${addActiveClass("/books")}`} onClick={gotoBookLists}> Stories </Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/activities")}`} onClick={gotoActivities}>Articles & Activities</Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/about")}`} onClick={gotoAbout}> About Us</Nav.Link>
              <Nav.Link className={`space ${addActiveClass("/gallery")}`} onClick={gotoGallery}> Happy Customers </Nav.Link>
              <Nav.Link className={`space ${addActiveClass("/stories")}`} onClick={gotoStoires}> Listen our stories </Nav.Link>
              <div className='d-flex justify-content-end profile'>
                  <img alt={profileImg} src={profileImg} className="profileImg"/>
                  <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                      <label className='name'>{userData.name}</label>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                          {/* <Dropdown.Item href="#">Account Details</Dropdown.Item> */}
                          <Dropdown.Item  onClick={logout}>Log Out</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                  <label onClick={gotoOrder} className="addTobasket"><BsCart3 /> {totalBookCount > 0 && (<Badge bg="info" pill>{totalBookCount}</Badge>)}</label>
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
              <Nav.Link className={`space ${addActiveClass("/")}`} onClick={gotoHome}> Home </Nav.Link>
              <Nav.Link className={`space-one ${addActiveClass("/books")}`} onClick={gotoBookLists}> Stories </Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/activities")}`} onClick={gotoActivities}>Articles & Activities</Nav.Link>
              <Nav.Link className={`space-two ${addActiveClass("/about")}`} onClick={gotoAbout}> About Us</Nav.Link>
              <Nav.Link className={`space ${addActiveClass("/gallery")}`} onClick={gotoGallery}> Happy Customers </Nav.Link>
              <Nav.Link className={`space ${addActiveClass("/stories")}`} onClick={gotoStoires}> Listen our stories </Nav.Link>
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
