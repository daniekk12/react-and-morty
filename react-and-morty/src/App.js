import React, { useState } from "react";
import CardListComponent from "./components/CardListComponent/CardListComponent"
import Button from "react-bootstrap/Button"
import "./App.css";
import Logo from "./img/logo.png"
import { useCharacters, useLocations } from "./api/useData";
import LandingPage from "./components/LandingPage/LandingPage";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard"
import LocationListComponent from './components/CardListComponent/LocationListComponent'
function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);
  const [showCharacters,setShowCharacters]=useState(false)
  const[showLocations,setShowLocations]=useState(false)
  const cardShowHandler=(e)=>{
    switch (e.target.id){
      case "characters":
        setShowCharacters(true)
        setShowLocations(false)
        break;
      case "location":
        setShowCharacters(false)
        setShowLocations(true)
        break
    }
  }
  return (
    <div className="App">
      <LandingPage onClick={cardShowHandler}></LandingPage>
      <CardListComponent characters={characters} show= {showCharacters}/>
      <LocationListComponent location = {locations} show = {showLocations}/>
    </div>
    
  )
}

export default App;
