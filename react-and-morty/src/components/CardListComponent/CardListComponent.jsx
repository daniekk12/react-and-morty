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
    let [chemata,setChemata]=useState(false)
    
    const changePage = (event, value) => {
        setPage(value);
    }
    
    const descriptionCardInfo=(e)=>{
        setCharInfo(e)
        setDescriptionCardVisible(true)
    }
    const createDescriptionCard=(info)=>{
        if(info==undefined)
        {   
            return
        }
        document.querySelector('.App').style.overflow = 'hidden';
        return (
            <Container id="cardContainerInfo">
                <DescriptionCard character={info} />
            </Container>
        )
    }
    
    const veryPrettyPleaseImBeggingYou=()=>{
        if(Characters!==undefined) {
            return Characters.map((element,i)=>{
                return (
                    <CharacterComponent key={i} character={element} onClick={()=>{descriptionCardInfo(element)}}></CharacterComponent>
                )
                })
            } 
        }
        window.addEventListener('mousedown', function(e){ 
            try{ 
            if(!document.getElementById('cardInfo').contains(e.target))
            {   
                document.querySelector('.App').style.overflow = 'auto';
                setDescriptionCardVisible(false)
                return
            }
        }
        catch (e){
            return
        }
          });
    
    return (
        
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