import React from 'react'
import CardComponent from 'react-bootstrap/Card';
import '../CharacterComponent/CharacterComponent.css'
import './LocationsComponent.css'

function LocationsComponent({location}) {
  return (
    <CardComponent fluid="True" id="card">
      
      <CardComponent.Body>
        <CardComponent.Title fluid="True">{location.name}</CardComponent.Title>
        <CardComponent.Text fluid="True">{location.type}</CardComponent.Text>
        <CardComponent.Text fluid="True">{location.dimension}</CardComponent.Text>
      </CardComponent.Body>
    </CardComponent>
  )
}


export default LocationsComponent;