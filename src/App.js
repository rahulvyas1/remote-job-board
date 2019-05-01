import React from 'react';

import './App.css';
import JobCard from './components/jobCard';
import { Button, Navbar, Nav, Card,Container,Row,Col,Badge,Figure,Image} from 'react-bootstrap';


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
<JobCard></JobCard>
<JobCard></JobCard>
<JobCard></JobCard>
</Container>
</div>
    </div>
  );
}

export default App;
