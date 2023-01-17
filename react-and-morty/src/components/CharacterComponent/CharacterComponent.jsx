import React from 'react';
import CardComponent from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Logo from "../../img/logo.png"
function CharacterComponent({character}) {
  return (
    <CardComponent fluid>
      <CardComponent.Img variant="left" src={character.image}/>
      <CardComponent.Body>
        <CardComponent.Title fluid>{character.name}</CardComponent.Title>
        <CardComponent.Text fluid>
            
          daniekk
        </CardComponent.Text>
      </CardComponent.Body>
    </CardComponent>
  );
}

export default CharacterComponent;