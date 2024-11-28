import React from "react";
import { useState } from "react";

function Cards() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div >
      <div className="bg-body-tertiary row " >
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\Hero1.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\Hero2.webp"
              alt="Hero1"
                style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\Hero3.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
      </div>
      {/* ------------------------------ */}
      <div className="bg-body-tertiary row">
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\Hero4.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\Hero5.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\Hero6.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
      </div>
      {/* --------------------- */}
      <div className="bg-body-tertiary row">
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\Hero7.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\hero14.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\hero15.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
      </div>
      {/* -------------------- */}
      <div className="bg-body-tertiary row" style={{marginBottom:"70px"}}>
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\Hero10.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\Hero11.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="ms-5">
            <img
              src="\Home\Hero8.webp"
              alt="Hero1"
              style={{
                width: "80%",
                height: "80%",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
            />
            <h4>Jeddah Stopper</h4>
            <h2>Starting From INR 23,458</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
