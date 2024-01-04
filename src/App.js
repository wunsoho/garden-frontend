import React, { useEffect } from "react";
import './App.css';
import Test from "./component/test"
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
        <Route path="/" element={<Test/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
  }



export default App;
