import React, { useEffect, useState } from "react";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container , Form, Button, Row, Col} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Nav/NavBar";
import './Login.css';
import logo from "./../../assets/images/Logo.png";
import logInImg1 from "./../../assets/images/SweZin1.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <Container fluid>
            <Container>
                <NavBar bg="light"/>
            </Container>
            <Container fluid>
                <Row>
                    <Col className="loginBg">
                        <img alt={logo} src={logo} className="logo"/>
                        <img alt={logInImg1} src={logInImg1}/>
                        <Button variant="light" type="submit" onClick={signInWithGoogle}>
                            Sign Up with Google
                        </Button>
                    </Col>
                    <Col className='d-flex'>
                        <div id='loginForm' className='col-md-8 m-auto p-3 align-items-center login'>
                            <div className="text-center">
                                <h3>Log In</h3>
                                <label>Login with your eamil and password.</label>
                            </div>
                            <Form.Group className="m-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="m-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="primary" type="submit" className='loginBtn' onClick={() => signInWithEmailAndPassword(auth, email, password)}>
                                    Log in
                                </Button>
                                <p className='py-5 signUpText'>Don’t have an account? <Link to="/signup">Sign up Here!</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    </Container>
    );
}

