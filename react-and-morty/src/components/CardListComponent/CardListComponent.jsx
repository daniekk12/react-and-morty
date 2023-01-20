import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useCharacters } from "../../api/useData";
import CharacterComponent from "../CharacterComponent/CharacterComponent";
import DescriptionCard from "../DescriptionCard/DescriptionCard";

import "./CardListComponent.scss";

const CardListComponent = ({ show }) => {
    const [page, setPage] = useState(1);
    const [descriptionCardVisible, setDescriptionCardVisible] = useState(false);
    const [charInfo, setCharInfo] = useState({});

    let CardCharacters = useCharacters(page);
    let charactersInfo = CardCharacters["info"];
    let Characters = CardCharacters["results"];

    const changePage = (event, value) => {
        setPage(value);
    };

    const descriptionCardInfo = (e) => {
        setCharInfo(e);
        setDescriptionCardVisible(true);
    };
    const createDescriptionCard = (info) => {
        if (info === undefined) {
            return;
        }
        document.querySelector(".App").style.overflow = "hidden";
        return (
            <Container id="cardContainerInfo">
                <DescriptionCard character={info} />
            </Container>
        );
    };

    const veryPrettyPleaseImBeggingYou = () => {
        if (Characters !== undefined) {
            return Characters.map((element, i) => (
                <CharacterComponent
                    key={i}
                    character={element}
                    onClick={() => {
                        descriptionCardInfo(element);
                    }}
                />
            ));
        }
    };

    window.addEventListener("mousedown", (e) => {
        if (!document.getElementById("cardInfo")?.contains(e.target)) {
            document.querySelector(".App").style.overflow = "auto";
            setDescriptionCardVisible(false);
        }
    });

    return (
        show && (
            <Container fluid>
                {descriptionCardVisible && createDescriptionCard(charInfo)}

                <Container fluid="True" id="cardContainer">
                    {veryPrettyPleaseImBeggingYou()}
                </Container>

                <Stack>
                    <Pagination
                        id="pagination"
                        onChange={changePage}
                        count={charactersInfo["pages"]}
                        color="primary"
                    />
                </Stack>
            </Container>
        )
    );
};
export default CardListComponent;
