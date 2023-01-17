import LocationsComponent from '../LocationsComponent/LocationsComponent'
import Container from "react-bootstrap/esm/Container";
import { useCharacters,useLocations } from "../../api/useData";
import './CardListComponent.css'
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

function LocationListComponent (props){
    const[page,setPage]=useState(1)
    let LocationCard=useLocations(page)
    let LocationInfo = LocationCard['info'];
    let Location = LocationCard['results']
    const increment=()=>{
        setPage(page+1)
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
        props.show && 
            <Container fluid="True" id="cardContainer">
            {
            veryPrettyPleaseImBeggingYou2()
            }
            <button onClick={()=>increment()}>Apasa-ma</button>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                    
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>
                    
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </Container>
        
    )
}
export default LocationListComponent;