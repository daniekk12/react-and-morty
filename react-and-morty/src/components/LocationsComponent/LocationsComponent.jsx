import React from 'react'
import CardComponent from 'react-bootstrap/Card';
import './LocationsComponent.css'


function LocationsComponent({location, onClick}) {
  return (
    <CardComponent fluid="True" id="card" onClick={() => { onClick() }}>
      
      <CardComponent.Body>
        <CardComponent.Title fluid="True">{location.name}</CardComponent.Title>
        <CardComponent.Text fluid="True">{location.type}</CardComponent.Text>
        <CardComponent.Text fluid="True">{location.dimension}</CardComponent.Text>
      </CardComponent.Body>
    </CardComponent>
  )
}


export default LocationsComponent;