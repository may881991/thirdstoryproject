import React, { useState } from 'react';
import './Login.css';
import logo from "./../../assets/images/Logo.png";
import { Container , Form, Button } from 'react-bootstrap';

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

    const handleLogin = async e => {
        e.preventDefault();
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('token', password);
        await loginUser({
            email,
            password
        });
    }
    return (
        <Container className='d-flex'>
            <Form id='loginForm' onSubmit={handleLogin} className='col-md-5 m-auto p-3 align-items-center'>
                <div className="text-center">
                    <img alt={logo} src={logo}/>
                    <h3>Log In to Dashboard</h3>
                    <label>Enter your email and password below</label>
                </div>
                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="m-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

