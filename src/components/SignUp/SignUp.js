import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container ,Form, Button, Row, Col} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import Loading from '../Loading/Loading';
import logo from "./../../assets/images/Logo.png";
import logInImg1 from "./../../assets/images/SweZin1.png";
import googleImg from "./../../assets/images/google-icon.png";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setName] = useState("");
  const [user, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const register = () => {
    if (!displayName) alert("Please enter name");
    registerWithEmailAndPassword(displayName, email, password);
  };

  useEffect(() => {
    if(loading === true){
        setTimeout(() => setLoading(false), 1000)
    }
    if (user) navigate("/dashboard");
  }, [user]);

  return (
    <>
    {loading === false ? (
    <Container fluid>
        <Container fluid>
            <Row>
                <Col className="loginBg">
                    <img alt={logo} src={logo} className="logo"/>
                    <img alt={logInImg1} src={logInImg1}/>
                    <Button variant="light" type="submit" onClick={signInWithGoogle} className="position-absolute">
                       
                    <img alt={googleImg} src={googleImg}/>  Sign Up with Google
                    </Button>
                </Col>
                <Col className="d-flex">
                    <div id='loginForm' className='col-md-8 m-auto p-3 align-items-center register'>
                        <div className="text-center">
                            <h3>Create Your Account</h3>
                            <label>Please fill in this  form to create a new account.</label>
                        </div>
                        <div className="register__container">
                            <Form.Group className="m-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Name" value={displayName} onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="m-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email"  value={email} onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="m-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password"  value={password} onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="primary" className='loginBtn'  onClick={register}>Register</Button>
                                <p className='py-5 signUpText'> Already have an account? <Link to="/login"> Login </Link> now.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container> 
    ) : (
        <Loading />
    )}
    </>
  );
}
export default SignUp;