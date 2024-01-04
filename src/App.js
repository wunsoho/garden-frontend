import React, { useEffect } from "react";
import './App.css';
import ExampleComponent from "./component/Home/Home"
import Nav from "./component/Nav/Nav"
import {BrowserRouter, Route, Routes} from "react-router-dom";

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
        <Route path="/" element={<ExampleComponent/>}/>
        <Route path="/Ranking" element={<ExampleComponent/>}/>
        <Route path="/Map" element={<ExampleComponent/>}/>
      </Routes>
    </div>
    <Nav/>
    </BrowserRouter>
  )
  }
export default App;
