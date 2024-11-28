import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlickCarousel = () => {
  const settings = {
    dots: true, // Show dots
    infinite: false, // Disable infinite scrolling for a fixed number of images
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 4 images at a time
    slidesToScroll: 4, // Scroll 4 images at a time (grouped)
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "grey", // Default color for inactive dots
          display: "inline-block",
          margin: "5px",
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dots}
      </div>
    ),
    // Ensure active dot turns black
    customPaging: (index) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: index === 0 ? "black" : "grey", // Make active dot black
          display: "inline-block",
          margin: "5px",
        }}
      ></div>
    ),
  };

  // Static array of image paths from the public/Activity folder
  const images = [
    "/Activity/activities1.jpeg",
    "/Activity/activities2.jpg",
    "/Activity/activities3.jpg",
    "/Activity/activities4.jpg",
    "/Activity/activities5.jpg",
    "/Activity/activities6.jpg",
    "/Activity/activities7.jpg",
    "/Activity/activities8.jpeg",
    "/Activity/activities9.jpg",
    "/Activity/activities10.jpg",
    "/Activity/activities11.jpg",
    "/Activity/activities12.jpg",
    "/Activity/activities13.jpeg",
  ];

  return (
    <>
      <h1
        style={{
          fontWeight: "500",
          fontSize: "60px",
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "100px",
        }}
      >
        Share Your Adventure
      </h1>
      <div
        style={{
          margin: "20px auto", // Center the carousel horizontally
          padding: "0 50px", // Add padding to the left and right sides
          maxWidth: "1600px", // Increased the maxWidth for larger size
          marginBottom: "100px",
        }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Activity ${index + 1}`}
                style={{
                  width: "100%", // Ensure the image fills its container
                  height: "350px", // Increased height for the images
                  padding: "5px",
                  objectFit: "cover", // Ensure the image maintains aspect ratio
                }}
              />
            </div>
          ))}
        </Slider>
        <button
          style={{
            backgroundColor: "#8B0000", // Dark red color
            color: "#fff", // White text color
            padding: "10px 20px", // Add some padding
            border: "none", // Remove the border
            borderRadius: "10px", // Rounded corners
            cursor: "pointer", // Pointer cursor on hover
            transition: "background-color 0.3s, opacity 0.3s", // Smooth transition for background color and opacity
            fontWeight: "bold",
            marginLeft: "450px",
            marginTop: "70px",
            fontSize:"40px"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#2f2f2f"; // Dark grey on hover
            e.target.style.opacity = "0.8"; // Slightly reduce opacity on hover
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#8B0000"; // Reset to dark red
            e.target.style.opacity = "1"; // Reset opacity
          }}
        >
          Add Your Adventurous Journey
        </button>
      </div>
    </>
  );
};

export default SlickCarousel;
