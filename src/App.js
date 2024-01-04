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
<<<<<<< HEAD
        <Route path="/" element={<ExampleComponent/>}/>
        <Route path="/123" element={<Test3/>}/>
=======
        <Route path="/" element={<Test/>}/>
>>>>>>> 1b2a4ac9d8abfe6fd1cbcbca33fc622147b952db
      </Routes>
    </div>
    </BrowserRouter>
  )
  }



export default App;
