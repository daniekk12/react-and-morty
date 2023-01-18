import LocationsComponent from '../LocationsComponent/LocationsComponent'
import Container from "react-bootstrap/esm/Container";
import { useCharacters,useLocations } from "../../api/useData";
import './CardListComponent.css'
import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './LocationListComponent.css'



function LocationListComponent (props){
    const[page,setPage]=useState(1)
    let currentPage = 1;
    let LocationCard=useLocations(page)
    let LocationInfo = LocationCard['info'];
    let Location = LocationCard['results']
    const changePage = (event, value) =>{
        
        setPage(value);
    }
    const veryPrettyPleaseImBeggingYou2=()=>{
        if(Location!==undefined)
        {
            return Location.map((e,i)=>{
                return (
                    <LocationsComponent key={i} location={e}></LocationsComponent>
                    )
                })
            } 
            
        }
        
    return(
        props.show && <Container fluid>
            <Container fluid="True" id="cardContainer">
                {
                veryPrettyPleaseImBeggingYou2()
                }
            </Container>
            <Container fluid id="paginate">
                <Stack>
                    <Pagination 
                        onChange={changePage} 
                        count={LocationInfo['pages']} 
                        color="primary"
                    />
                </Stack>

            </Container>
        
        </Container> 
        
    )
}
export default LocationListComponent;