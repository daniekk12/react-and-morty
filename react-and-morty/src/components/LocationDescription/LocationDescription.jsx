import CardComponent from "react-bootstrap/Card";

import "./LocationDescription.scss";

const LocationDescription = ({ location }) => (
    <CardComponent fluid="True" id="locationCardInfo">
        <CardComponent.Body>
            <CardComponent.Title fluid="True">
                {location.name}
            </CardComponent.Title>
            <CardComponent.Text fluid="True">
                Created: {location.created}
                <br />
                Dimension: {location.dimension}
                <br />
                Type: {location.type} <br />
                Url: {location.url}
            </CardComponent.Text>
        </CardComponent.Body>
    </CardComponent>
);

export default LocationDescription;
