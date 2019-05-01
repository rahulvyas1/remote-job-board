import React from 'react';
import { Button, Navbar, Nav, Card,Container,Row,Col,Badge,Figure,Image} from 'react-bootstrap';
import placeholderImg from '../images/placeholder.png';
function App() {
    return(
        <div>
            <Card body style={{boxShadow: '0 5px 15px rgba(0,0,0,.08)'}}>
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
    <Col lg="3"><h4><Badge variant="primary">New</Badge>
     <Badge variant="primary">New</Badge>  
    <Badge variant="primary">New</Badge></h4></Col>
    <Col><Button variant="primary" block size="md">
      Submit
    </Button></Col>
  </Row>
</Container></Card><br></br>
        </div>
    )};


export default App;