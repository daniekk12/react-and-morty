import CardComponent from "react-bootstrap/Card";

const LocationsComponent = ({ location, onClick }) => (
    <CardComponent
        fluid="True"
        id="card"
        onClick={() => {
            onClick();
        }}>
        <CardComponent.Body>
            <CardComponent.Title fluid="True">
                {location.name}
            </CardComponent.Title>
            <CardComponent.Text fluid="True">
                {location.type}
            </CardComponent.Text>
            <CardComponent.Text fluid="True">
                {location.dimension}
            </CardComponent.Text>
        </CardComponent.Body>
    </CardComponent>
);

export default LocationsComponent;
