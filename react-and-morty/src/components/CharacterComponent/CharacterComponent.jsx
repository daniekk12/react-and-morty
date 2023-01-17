import React from 'react';
import CardComponent from 'react-bootstrap/Card';
import './CharacterComponent.css'
function CharacterComponent({character}) {
  return (
    <CardComponent fluid id="card">
      <CardComponent.Img variant="left" src={character.image}/>
      <CardComponent.Body>
        <CardComponent.Title fluid>{character.name}</CardComponent.Title>
        <CardComponent.Text fluid>
            {character.species}
        </CardComponent.Text>
      </CardComponent.Body>
    </CardComponent>
  );
}

export default CharacterComponent;