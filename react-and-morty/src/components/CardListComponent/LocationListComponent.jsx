import { useState } from "react";

import Container from "react-bootstrap/esm/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useLocations } from "../../api/useData";
import LocationDescription from "../LocationDescription/LocationDescription";
import LocationsComponent from "../LocationsComponent/LocationsComponent";

import "./CardListComponent.scss";

const LocationListComponent = ({ show }) => {
    const [page, setPage] = useState(1);
    const [locationCardVisible, setLocationCardVisible] = useState(false);
    const [locInfo, setLocInfo] = useState({});

    let CardLocation = useLocations(page);
    let locationsInfo = CardLocation["info"];
    let Locations = CardLocation["results"];

    const changePage = (event, value) => {
        setPage(value);
    };

    const descriptionCardInfo = (e) => {
        setLocInfo(e);
        setLocationCardVisible(true);
    };

    const createDescriptionCard2 = (info) => {
        if (info == undefined) {
            return;
        }
        document.querySelector(".App").style.overflow = "hidden";
        return <LocationDescription location={info} />;
    };

    window.addEventListener("mousedown", function (e) {
        if (!document.getElementById("locationCardInfo")?.contains(e.target)) {
            document.querySelector(".App").style.overflow = "auto";
            setLocationCardVisible(false);
        }
    });

    const veryPrettyPleaseImBeggingYou2 = () => {
        if (Locations !== undefined) {
            return Locations.map((element, i) => (
                <LocationsComponent
                    key={i}
                    location={element}
                    onClick={() => {
                        descriptionCardInfo(element);
                    }}
                />
            ));
        }
    };

    return (
        show && (
            <Container fluid>
                {locationCardVisible && createDescriptionCard2(locInfo)}

                <Container fluid="True" id="cardContainer">
                    {veryPrettyPleaseImBeggingYou2()}
                </Container>

                <Stack>
                    <Pagination
                        id="pagination"
                        onChange={changePage}
                        count={locationsInfo["pages"]}
                        color="primary"
                    />
                </Stack>
            </Container>
        )
    );
};
export default LocationListComponent;
