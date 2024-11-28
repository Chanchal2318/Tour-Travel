import React from "react";
import MyNavbar from "../../MyNav";
import Hero from './Hero.jsx';
import Cards from "./Cards.jsx";
import Story from "./Story.jsx";
import Attraction from "./Attraction.jsx";
import Contact from "./Contact.jsx";
import Know from "./Know.jsx";
import Footer from "../Footer.jsx";

function HomePage() {
  return (
    <div>
      <MyNavbar/>
      <Hero/>
      <Cards/>
      <Story/>
      <Attraction/>
      <Contact/>
      <Know/>
      <Footer/>
    </div>
  );
}

export default HomePage;
