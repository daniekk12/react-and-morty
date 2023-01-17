import React, { useState } from "react";
import CardListComponent from "./components/CardListComponent/CardListComponent"
import Button from "react-bootstrap/Button"
import "./App.css";
import Logo from "./img/logo.png"
import { useCharacters, useLocations } from "./api/useData";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);
  const [showCharacters,setShowCharacters]=useState(false)
  const cardShowHandler=(e)=>{
    switch (e.target.id){
      case "characters":
        setShowCharacters(true)
        break;
      case "location":
        setShowCharacters(false)
        break
    }
  }
  
  return (
    <div className="App">
      <LandingPage onClick={cardShowHandler}></LandingPage>
      <CardListComponent characters={characters} show={showCharacters}/>
    </div>
    
  )
}

export default App;
