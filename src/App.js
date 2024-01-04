import React, { useEffect } from "react";
import './App.css';
import Home from "./component/Home/Home"
import Nav from "./component/Nav/Nav"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Map from "./component/Map/Map";
import Ranking from "./component/Ranking/Ranking"

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Ranking" element={<Ranking/>}/>
        <Route path="/Map" element={<Map/>}/>
      </Routes>
    </div>
    <Nav/>
    </BrowserRouter>
  )
  }
export default App;
