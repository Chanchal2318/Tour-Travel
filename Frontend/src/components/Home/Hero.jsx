import React from "react";

function Hero() {
  return (
    <>
      <div>
        <div className="row">
            <video
              controls
              muted
              loop
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            >
              <source src="/TourVedio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
    
    </>
  );
}

export default Hero;
