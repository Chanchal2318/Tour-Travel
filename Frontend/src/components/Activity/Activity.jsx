import React, { useEffect, useRef } from "react";
import MyNavbar from "../../MyNav";
import Carousel from "./Carousel";
import HeroSection from "./HeroSection";
import SlickCarousel from "./Slick.Carousel";
import AdventureBlog from "./AdventureBlog";
import Footer from "../Footer";

function Activity() {

  return (
    <>
      <MyNavbar />
      <Carousel/>
      <HeroSection/>
      <SlickCarousel/>
      <AdventureBlog/>
      <Footer/>
    </>
  );
}

export default Activity;
