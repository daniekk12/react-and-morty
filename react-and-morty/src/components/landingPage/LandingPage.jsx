import {useState, useEffect} from 'react';
import React from "react"
import Button from 'react-bootstrap/Button';
import Logo from '../../img/logo.png';
import './LandingPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

export default function LandingPage() {
  
  const [size, setSize] = useState(12);
  
  return (
    <div id="landingPage">

      <Container fluid>

        <Row>
          <center><Image src={Logo} fluid id="logo"/></center>
        </Row>
      <p id="description">Welcome!<br />Our site contains all information about Rick and Morty characters and their locations. <br />Click any of the buttons to get started!</p>

        <Row className="justify-content-center" fluid id="btnRow">

          <Col xs="auto">
            <Button variant="primary" id="characters">Characters</Button>
          </Col>

          <Col xs="auto">
            <Button variant="success" id="location"> Locations </Button>
          </Col>

        </Row>
      </Container>
        
    </div>
  )
}
