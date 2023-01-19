import React from 'react';
import CardComponent from 'react-bootstrap/Card';
import './LocationDescription.css'

function LocationDescription({location}){
    return(
        <CardComponent fluid="True" id="cardInfo">
          <CardComponent.Body>
            <CardComponent.Title fluid="True">{location.name}</CardComponent.Title>
            <CardComponent.Text fluid="True">
                Created: {location.created}<br />
                Dimension: {location.dimension}<br />
                Type: {location.type} <br />
                Url: {location.url} 
            </CardComponent.Text>
          </CardComponent.Body>
        </CardComponent>
    )
}


export default LocationDescription;