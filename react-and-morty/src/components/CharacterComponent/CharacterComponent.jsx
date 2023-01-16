import React from 'react';
import CardComponent from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Logo from "../../img/logo.png"
function CharacterComponent() {
  return (
    <CardComponent fluid>
      <CardComponent.Img variant="left" src={Logo}/>
      <CardComponent.Body>
        <CardComponent.Title fluid>Card Title</CardComponent.Title>
        <CardComponent.Text fluid>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardComponent.Text>
      </CardComponent.Body>
    </CardComponent>
  );
}

export default CharacterComponent;