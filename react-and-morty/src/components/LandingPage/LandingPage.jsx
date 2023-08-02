import { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Logo from "../../img/logo.png";
import "./LandingPage.css";

const LandingPage = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <Container fluid="True" id="landingPage">
            <Container fluid>
                <Row>
                    <center>
                        <Image src={Logo} fluid="True" id="logo" />
                    </center>
                </Row>

                {isVisible && (
                    <p id="description">
                        Welcome!
                        <br />
                        Our site contains all information about Rick and Morty
                        characters and their locations. <br />
                        Click any of the buttons to get started!
                    </p>
                )}

                <Row
                    className="justify-content-center"
                    fluid="True"
                    id="btnRow">
                    <Col xs="auto">
                        <Button
                            variant="primary"
                            id="characters"
                            onClick={(e) => {
                                onClick(e);
                                setIsVisible(false);
                            }}>
                            Characters
                        </Button>
                    </Col>

                    <Col xs="auto">
                        <Button
                            variant="success"
                            id="location"
                            onClick={(e) => {
                                onClick(e);
                                setIsVisible(false);
                            }}>
                            Locations
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default LandingPage;
