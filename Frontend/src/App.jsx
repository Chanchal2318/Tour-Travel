import React from "react";
import {Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage"
import AboutPage from "./components/About/AboutPage"
import Activity from "./components/Activity/Activity";
import Mountains from "./components/Destination/Mountains"


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Spiritual from "./components/Destination/Spiritual";



function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/mountain" element={<Mountains/>}/>
        <Route path="/spiritual" element={<Spiritual/>}/>
      </Routes>
    </>
  )
}

export default App
