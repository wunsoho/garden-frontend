import React, { useEffect } from "react";
import './App.css';
import Test3 from './component/test3';
import ExampleComponent from "./component/test2"
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
        <Route path="/123" element={<Test3/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
  }



export default App;
