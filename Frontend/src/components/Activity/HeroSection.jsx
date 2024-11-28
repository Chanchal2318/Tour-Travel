import React from "react";
import  { useState } from "react";

function HeroSection() {
  const [hover, setHover] = useState(false);
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
        Choose Your Activity
      </h1>
      <div className="row">
        <div
          className="col-3 "
          style={{ marginBottom: "80px" }}
          onMouseEnter={() => setHover(true)} // Mouse hover starts
          onMouseLeave={() => setHover(false)}
        >
          <img
            src="/Activity/activity4.jpg"
            style={{ width: "400px", height: "450px", marginLeft: "100px" ,  transform: hover ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s ease-in-out"}}
          />
          <h1
            style={{
              marginTop: "10px",
              marginLeft: "100px",
              color: "rgba(128,0,0,1)",
            }}
          >
            Hiking Trekking
          </h1>
        </div>
        <div className="col-3 ">
          <img
            src="/Activity/activity5.jpg"
            style={{ width: "400px", height: "450px", marginLeft: "100px" , transform: hover ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease-in-out"}}
          />
          <h1
            style={{
              marginTop: "10px",
              marginLeft: "100px",
              color: "rgba(128,0,0,1",
            }}
          >
            Rafting & Kayaking
          </h1>
        </div>
        <div className="col-3">
          <img
            src="/Activity/activity6.jpg"
            style={{ width: "400px", height: "450px", marginLeft: "100px" , transform: hover ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease-in-out"}}
          />
          <h1
            style={{
              marginTop: "10px",
              marginLeft: "100px",
              color: "rgba(128,0,0,1",
            }}
          >
            Wildlife & Safari
          </h1>
        </div>
        <div className="col-3">
          <img
            src="/Activity/activity7.jpg"
            style={{ width: "400px", height: "450px", marginLeft: "100px" }}
          />
          <h1
            style={{
              marginTop: "10px",
              marginLeft: "100px",
              color: "rgba(128,0,0,1",
            }}
          >
            Adventure Cruise
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3 " style={{ marginBottom: "80px" }}>
          <img
            src="/Activity/activity8.jpg"
            style={{ width: "400px", height: "450px", marginLeft: "100px" }}
          />
          <h1
            style={{
              marginTop: "10px",
              marginLeft: "100px",
              color: "rgba(128,0,0,1",
            }}
          >
            Cultural Activity
          </h1>
        </div>
        <div className="col-3 ">
          <img
            src="/Activity/activity9.jpg"
            style={{ width: "400px", height: "450px", marginLeft: "100px" }}
          />
          <h1
            style={{
              marginTop: "10px",
              marginLeft: "100px",
              color: "rgba(128,0,0,1",
            }}
          >
            Family Adventure
          </h1>
        </div>
        <div className="col-3">
          <img
            src="/Activity/activity10.jpg"
            style={{ width: "400px", height: "450px", marginLeft: "100px" }}
          />
          <h1
            style={{
              marginTop: "10px",
              marginLeft: "100px",
              color: "rgba(128,0,0,1",
            }}
          >
            Multi-Adventure
          </h1>
        </div>
        <div className="col-3">
          <img
            src="/Activity/activity11.jpg"
            style={{ width: "400px", height: "450px", marginLeft: "100px" }}
          />
          <h1
            style={{
              marginTop: "10px",
              marginLeft: "100px",
              color: "rgba(128,0,0,1",
            }}
          >
            Custom & Private
          </h1>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
