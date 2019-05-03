import React from 'react';
import backgroundImg from './images/Background.png'
import JobCard from './components/jobCard';
import { Button, Navbar, Nav,Container,Image, Form,Tabs,Tab,Sonnet} from 'react-bootstrap';
import AWS from 'aws-sdk';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    // ES Modules, e.g. transpiling with Babel
  import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import {LinkContainer} from 'react-router-bootstrap';

    var poolData = {
      UserPoolId : 'us-east-2_7HwAw3yxa', // Your user pool id here
      ClientId : '' // Your client id here
  };
  var userPool = new CognitoUserPool(poolData);
  var attributeList = [];


function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      username:"",
      isAuthenticated: false
    };

  }  

handleSignin = (event) => {

  event.preventDefault();


var userData = {
  Username : this.state.email,
  Pool : userPool
};

var cognitoUser = new CognitoUser(userData);

var authenticationData = {
  Email : this.state.email,
  Password : this.state.password,
};
var authenticationDetails = new AuthenticationDetails(authenticationData);

  
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();

        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        AWS.config.region = 'us-east-2';

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId : 'us-east-2:be5b8f04-07b5-4e3c-b418-5e68f29fa222', // your identity pool id here
            Logins : {
                // Change the key below according to the specific region your user pool is in.
                'cognito-idp.us-east-2.amazonaws.com/us-east-2_7HwAw3yxa' : result.getIdToken().getJwtToken()
            }
        });

        //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
        AWS.config.credentials.refresh((error) => {
            if (error) {
                 console.error(error);
            } else {
                 // Instantiate aws sdk service objects now that the credentials have been updated.
                 // example: var s3 = new AWS.S3();
                 console.log('Successfully logged!');
            }
        });
    },

    onFailure: function(err) {
        alert(err.message || JSON.stringify(err));
    },
});
}

handleSignup = (event) => {
    
  var dataEmail = {
    Name : 'email',
    Value: ""+this.state.email

};
var attributeEmail = new CognitoUserAttribute(dataEmail);

attributeList.push(attributeEmail);

  event.preventDefault();
  console.log(this.state.email);
  userPool.signUp(this.state.username,this.state.password, attributeList, null, function(err, result){
    if (err) {
        alert(err.message || JSON.stringify(err));
        return;
    }
    var cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());

    
});


console.log(event.target);
}

handleChange = (event) => {

  if(event.target.name == "email"){
    this.setState({email: event.target.value});
  }
  if(event.target.name == "password"){
    this.setState({password: event.target.value});
  }
  if(event.target.name == "username"){
    this.setState({username: event.target.value})
  }
}

render(){
  return (
    <Router>
    <div>
<div>
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="#home">Remote Jobs Board</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/foo/bar">
      <Nav.Link href="#features" >All Jobs</Nav.Link>
      </LinkContainer>
      <Nav.Link href="">Create Job</Nav.Link>
      <Nav.Link href="">My Profile</Nav.Link>
   
    </Nav>
    <Nav>
      <p>Welcome, Rahul</p>
      <Button variant="outline-light">Login/Signup</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
<div>
<Image src={backgroundImg} fluid  style={{height: `350px`, width: `100%`}}/>

<Container>


<Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="home" title="Login">

        <Form onSubmit={this.handleSignin}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  value={this.state.email} onChange={this.handleChange} name="email"/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"   value={this.state.password} onChange={this.handleChange} name="password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Don't remember me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>

        </Tab>
        <Tab eventKey="profile" title="Signup">

        <Form onSubmit={this.handleSignup}>
  <Form.Group controlId="formBasicEmail">
  <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="username" value={this.state.username} onChange={this.handleChange} name="username" />
<br></br>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  value={this.state.email} onChange={this.handleChange} name="email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"   value={this.state.password} onChange={this.handleChange} name="password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Sign-Up
  </Button>
</Form>

        </Tab>
      </Tabs>



</Container>

</div>
<div>


<Container>
<br></br>
<h2>All Jobs</h2>
<br></br>
<JobCard></JobCard>
<JobCard></JobCard>
<JobCard></JobCard>
</Container>
</div>
    </div>

    <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
    </Router>
  );


}

}

export default App;
