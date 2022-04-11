import React, { useState } from 'react';
import { Container , Form, Button, Row, Col} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './Login.css';
import logo from "./../../assets/images/Logo.png";
import logInImg1 from "./../../assets/images/SweZin1.png";

async function loginUser(credentials){
    console.log(credentials)
    return fetch("http://localhost:8080/login", {
        method: "POST",
        header:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data=> data.json())
}

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate(); 

    const handleLogin = async e => {
        e.preventDefault();
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('token', password);
        navigate('/Dashboard');
        window.location.reload();
        await loginUser({
            email,
            password
        });
    }
    return (
        <Container fluid className='login-container'>
            <Row>
                <Col className="loginBg">
                    <img alt={logo} src={logo} className="logo"/>
                    <img alt={logInImg1} src={logInImg1}/>
                </Col>
                <Col>
                    <Form id='loginForm' onSubmit={handleLogin} className='col-md-8 m-auto p-3 align-items-center'>
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
                            <Button variant="primary" type="submit" className='loginBtn'>
                                Log in
                            </Button>
                            <p className='py-5 signUpText'>Don’t have an account? <a href="#">Sign up Here!</a></p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

