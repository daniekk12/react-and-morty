import CardComponent from "react-bootstrap/Card";

import "./DescriptionCard.scss";

const DescriptionCard = ({ character }) => (
    <CardComponent fluid="True" id="cardInfo">
        <CardComponent.Img
            className="cardImg"
            variant="left"
            src={character.image}
        />
        <CardComponent.Body>
            <CardComponent.Title fluid="True">
                {character.name}
            </CardComponent.Title>
            <CardComponent.Text fluid="True">
                Species: {character.species} <br />
                Gender: {character.gender} <br />
                Location: {character.location.name} <br />
                Origin: {character.origin.name} <br />
                Status: {character.status}
            </CardComponent.Text>
        </CardComponent.Body>
    </CardComponent>
);

export default DescriptionCard;
