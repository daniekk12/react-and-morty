
import Container from "react-bootstrap/esm/Container";
import { useCharacters } from "../../api/useData";
import './LocationListComponent.css'
import React, { useEffect, useState } from "react";
import { useLocations } from "../../api/useData";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import LocationDescription from "../LocationDescription/LocationDescription";
import LocationsComponent from '../LocationsComponent/LocationsComponent'
function LocationListComponent (props){
    const[page,setPage]=useState(1)
    const [locationCardVisible, setLocationCardVisible] = useState(false);
    const [locInfo, setLocInfo] = useState({});
    let CardLocation=useLocations(page)
    let locationsInfo = CardLocation['info'];
    let Locations=CardLocation['results']
    let [chemata,setChemata]=useState(false)


    
    
    const changePage = (event, value) => {
        setPage(value);
    }
    
    const descriptionCardInfo=(e)=>{
        setLocInfo(e)
        setLocationCardVisible(true)
    }
    const createDescriptionCard2=(info)=>{
        if(info==undefined)
        {   
            return
        }
        document.querySelector('.App').style.overflow = 'hidden';
        return (
                <LocationDescription location={info} />
        )
    }
    window.addEventListener('mousedown', function(e){
        try {
            if(!document.getElementById('locationCardInfo').contains(e.target)) {
                document.querySelector('.App').style.overflow = 'auto';
                setLocationCardVisible(false)
                return
            }
        }  catch (e) {
            return
        }

      });
    const veryPrettyPleaseImBeggingYou2=()=>{
        if(Locations!==undefined) {
            return Locations.map((element,i)=>{
                return (
                    <LocationsComponent key={i} location={element} onClick={()=>{descriptionCardInfo(element)}} ></LocationsComponent>
                )
                })
            } 
        }
    
    return (
        
        props.show && <Container fluid>
            
            {
                locationCardVisible && createDescriptionCard2(locInfo)
            }
            
            <Container fluid="True" id="cardContainer">
            {
                veryPrettyPleaseImBeggingYou2()
            }
            </Container>
            
            <Stack>
            <Pagination
                        id="pagination" 
                        onChange={changePage} 
                        count={locationsInfo['pages']} 
                        color="primary"
                    />
            </Stack>
            </Container>
    )
}
export default LocationListComponent;