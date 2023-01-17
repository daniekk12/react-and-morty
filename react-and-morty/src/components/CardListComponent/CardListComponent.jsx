import CharacterComponent from "../CharacterComponent/CharacterComponent";
import Container from "react-bootstrap/esm/Container";
import { useCharacters } from "../../api/useData";
import './CardListComponent.css'
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

function CardListComponent (props){
    const[page,setPage]=useState(1)
    let CardCharacters=useCharacters(page)
    const increment=()=>{
        setPage(page+1)
    }
    let Characters=CardCharacters['results']
    const veryPrettyPleaseImBeggingYou=()=>{
        if(Characters!==undefined)
        {
            return Characters.map((e,i)=>{
                console.log(e)
                return (
                    <CharacterComponent key={i} character={e}></CharacterComponent>
                )
            })
        } 
        
    }
    return(
        props.show && 
            <Container fluid id="cardContainer">
            {
            veryPrettyPleaseImBeggingYou()
            }
            {/* <button onClick={()=>increment()}>Apasa-ma</button> */}
        </Container>
        
    )
}
export default CardListComponent