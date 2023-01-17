import CharacterComponent from "../CharacterComponent/CharacterComponent";
import Container from "react-bootstrap/esm/Container";
import { useCharacters } from "../../api/useData";
import './CardListComponent.css'
import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
let pageSize = 20
function CardListComponent (props){
    const[page,setPage]=useState(1)
    let CardCharacters=useCharacters(page)
    let charactersInfo = CardCharacters['info'];
    let Characters=CardCharacters['results']
    const veryPrettyPleaseImBeggingYou=()=>{
        if(Characters!==undefined)
        {
            return Characters.map((e,i)=>{
                return (
                    <CharacterComponent key={i} character={e}></CharacterComponent>
                    )
                })
            } 
            
        }
    
    return(
        
        props.show && <div style={{height:"1500px"}}>
            <Container fl   uid="True" id="cardContainer">
            {
            veryPrettyPleaseImBeggingYou()
            }
            </Container>
            
            <Stack sx={{backgroundColor:"red",width:"1000px",justifyContent:"space-between"}}>
              <Pagination sx={{width:"1000px",justifyContent:"space-between"}} onChange={(e) => setPage(parseInt(e.target.innerText))}count={42} color="primary" />
            </Stack>
            </div>
    )
}
export default CardListComponent