import React, { Component }from 'react';
import LogIn from "../LogIn/Login";

function getToken(){
  const tokenString = sessionStorage.getItem('token');
  console.log(tokenString)
  return tokenString;
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = { apiResponse : "" };
  }

  callAPI(){
    fetch("http://localhost:8080/login")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err)
  }

  componentDidMount(){
    this.callAPI();
  }

  render(){
    const token = getToken();
    console.log(token)
    if(!token) {
      console.log("not token")
      return <LogIn/>
    }
    return(
      <LogIn/>
    );
  }
}

export default App;
