import React from 'react';

import './App.css';

import { Button, Navbar, Nav, Card,Container,Row,Col,Badge,Figure,Image} from 'react-bootstrap';

import placeholderImg from './images/placeholder.png';
import backgroundImg from './images/Background.png'
function App() {
  return (
    <div>
<div>
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="#home">Remote Jobs Board</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">All Jobs</Nav.Link>
    </Nav>
    <Nav>
      <Button variant="outline-light">Login</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
<div>
<Image src={backgroundImg} fluid  style={{height: `350px`, width: `100%`}}/>
</div>
<div>


<Container>
<br></br>
<h2>All Jobs</h2>
<br></br>
<Card body>
<Container>

  <Row>
    <Col lg="7">
    <Row>
      <Col lg="4" > 
        <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={placeholderImg}
  />      
              
      </Col>

      <Col lg="8" > 
      <h3>Looking for a Gatsby Landing page created<span style={{color:`green`}}> $500</span></h3>
      <p>RetailNext, INC. <br/> <ion-icon name="time"></ion-icon> Posted 2 days ago</p>
      </Col>
      </Row></Col>
    <Col lg="3"><h2><Badge variant="primary">New</Badge>
     <Badge variant="primary">New</Badge>  
    <Badge variant="primary">New</Badge></h2></Col>
    <Col><Button variant="primary" size="lg">
      Submit Offer
    </Button></Col>
  </Row>
</Container></Card>
</Container>
</div>
    </div>
  );
}

export default App;
