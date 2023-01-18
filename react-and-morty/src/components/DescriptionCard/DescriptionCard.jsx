import React from 'react';
import CardComponent from 'react-bootstrap/Card';
import { useState } from 'react';
import './DescriptionCard.css'

function ShowHideButton(){
  const [isVisible, setVisibility] = useState(true)
  const handleClick = () => {
    
  }
}
function DescriptionCard({character}){
    return (
        <CardComponent fluid="True" id="cardInfo">
          <CardComponent.Img variant="left"/>
          <CardComponent.Body>
            <CardComponent.Title fluid="True">DA</CardComponent.Title>
            <CardComponent.Text fluid="True">
                DA
            </CardComponent.Text>
          </CardComponent.Body>
        </CardComponent>
      );
}

export default DescriptionCard;

