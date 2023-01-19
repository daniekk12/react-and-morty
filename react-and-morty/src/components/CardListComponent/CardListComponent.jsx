import CharacterComponent from "../CharacterComponent/CharacterComponent";
import Container from "react-bootstrap/esm/Container";
import { useCharacters } from "../../api/useData";
import './CardListComponent.css'
import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DescriptionCard from "../DescriptionCard/DescriptionCard";

function CardListComponent (props){
    const[page,setPage]=useState(1)
    const [descriptionCardVisible, setDescriptionCardVisible] = useState(false);
    const [charInfo, setCharInfo] = useState({});
    let CardCharacters=useCharacters(page)
    let charactersInfo = CardCharacters['info'];
    let Characters=CardCharacters['results']
    
    const changePage = (event, value) => {
        setPage(value);
    }
    
    let descriptionCardInfo=(e)=>{
        setCharInfo(e)
        setDescriptionCardVisible(true)
    }
    let createDescriptionCard=(info)=>{
        if(info==undefined)
        {   
            return
        }
        props.checkDesc(descriptionCardVisible)
        return (
            <Container  id="descriptionContainer">
            <DescriptionCard character={info} />
            </Container>
            )
    }

    const veryPrettyPleaseImBeggingYou=()=>{
        if(Characters!==undefined)
        {
            return Characters.map((element,i)=>{
                return (
                    <CharacterComponent key={i} character={element} onClick={()=>{descriptionCardInfo(element)}}></CharacterComponent>
                    )
                })
            } 
            
        }
    
    return(
        
        props.show && <Container fluid>
            
            {
                    descriptionCardVisible && createDescriptionCard(charInfo)
            }
            
            <Container fluid="True" id="cardContainer">
            {
                veryPrettyPleaseImBeggingYou()
            }
            </Container>
            
            <Stack>
            <Pagination
                        id="pagination" 
                        onChange={changePage} 
                        count={charactersInfo['pages']} 
                        color="primary"
                    />
            </Stack>
            </Container>
    )
}
export default CardListComponent;