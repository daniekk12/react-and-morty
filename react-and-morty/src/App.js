import React from "react";
import CardListComponent from "./components/CardListComponent/CardListComponent"
import Button from "react-bootstrap/Button"
import "./App.css";
import Logo from "./img/logo.png"
import { useCharacters, useLocations } from "./api/useData";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);
  const IAONGURA= async ()=>{
    return await characters
  }
  
  return (
    
    <div className="App">
      <LandingPage></LandingPage>
      <CardListComponent characters={IAONGURA().then((response)=> response)}/>
    </div>
    
  )
}

export default App;
