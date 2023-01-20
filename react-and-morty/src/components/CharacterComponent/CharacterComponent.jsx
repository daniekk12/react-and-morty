import CardComponent from 'react-bootstrap/Card';
import { useEffect } from 'react';
import './CharacterComponent.css'
function CharacterComponent({character,onClick,cursorY  }) {
  const scroll = () => {
    document.querySelector('.App').scrollTo({
      top: 250
    })
  }
  return (
    <CardComponent fluid="True" id="card" onClick={() => { onClick() ; scroll() }}>
      <CardComponent.Img className='card-img' variant="left" src={character.image}/>
      <CardComponent.Body>
        <CardComponent.Title fluid="True">{character.name}</CardComponent.Title>
        <CardComponent.Text fluid="True">
            {character.species}
        </CardComponent.Text>
      </CardComponent.Body>
    </CardComponent>
  );
}

export default CharacterComponent;