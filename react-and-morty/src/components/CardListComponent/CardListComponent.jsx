import CharacterComponent from "../CharacterComponent/CharacterComponent";
import Container from "react-bootstrap/esm/Container";
import { useCharacters } from "../../api/useData";

function CardListComponent (props){
    let CardCharacters=useCharacters(1)
    let Nebunie=CardCharacters['results']
    const veryPrettyPleaseImBeggingYou=()=>{
        Nebunie ? Nebunie.map((e)=>{
            console.log(e)
            return (
                "Nebunie"
            )
        }):console.log("suge-o")
        
    }
    return(
        <Container fluid>
            {
            veryPrettyPleaseImBeggingYou()
            }
        </Container>
    )
}
export default CardListComponent