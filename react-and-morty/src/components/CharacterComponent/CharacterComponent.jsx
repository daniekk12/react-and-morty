import CardComponent from 'react-bootstrap/Card';
import './CharacterComponent.css'
function CharacterComponent({character,onClick}) {
  const scroll=()=>{
    console.log('da frate se cheama')
    document.querySelector('.App').scrollTo({
      top: 250,
      behavior: "smooth"
    })
  }

  return (
    <CardComponent fluid="True" id="card" onClick={() => {scroll(); onClick()}}>
      <CardComponent.Img variant="left" src={character.image}/>
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