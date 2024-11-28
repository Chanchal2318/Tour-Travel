import React from "react";

function Story() {
  return (
    <div style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      {/* Link to Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bokor&display=swap"
        rel="stylesheet"
      />
      <div style={{ marginBottom: "30px" }}>
        <h1
          style={{
            fontFamily: "'Bokor', cursive",
            textAlign: "center",
            padding: "20px",
            fontSize: "70px",
            color: "rgba(230, 0, 0, 1)",
          }}
        >
          Our Story: Where Travelling Passion and Precision Blends
        </h1>

        <div className="row">
          <div className="col-8">
            <p
              style={{
                textAlign: "center",
                marginLeft: "100px",
                marginRight: "100px",
                fontSize: "25px",
                marginTop: "50px",
                marginBottom: "50px",
              }}
            >
              Nestled in the lap of the Himalayas, Uttarakhand offered me an
              enchanting blend of serene landscapes, spirituality, and
              adventure. My journey began in Rishikesh, the "Yoga Capital of the
              World," where the peaceful Ganga Aarti at Triveni Ghat left me in
              awe. The sight of the river glimmering under the golden lamps was
              a spiritual awakening.
            </p>

            <p
              style={{
                textAlign: "center",
                marginLeft: "100px",
                marginRight: "100px",
                fontSize: "25px",
              }}
            >
              Next, I ventured to Mussoorie, the "Queen of Hills," with its
              misty hills and cascading waterfalls. A walk along Camel’s Back
              Road amidst cool breezes and panoramic views of the valley was
              mesmerizing. Further north, in Auli, I experienced the thrill of
              skiing on pristine snow-covered slopes surrounded by towering
              peaks.
            </p>
            <p
              style={{
                textAlign: "center",
                marginLeft: "100px",
                marginRight: "100px",
                fontSize: "25px",
              }}
            >
              The people of Uttarakhand, with their warm hospitality, and the
              simple yet delicious pahadi cuisine, made my trip even more
              special. Uttarakhand, with its blend of natural beauty and
              tranquility, will always hold a special place in my heart. It’s a
              destination I’ll forever cherish!
            </p>
            <button
              style={{
                backgroundColor: "#6A4C9C", // Purple background color
                color: "white", // White text color
                fontSize: "16px", // Text size
                fontWeight: "bold", // Bold text
                padding: "10px 20px", // Padding for better spacing
                border: "none", // Removes border
                borderRadius: "5px", // Rounded corners
                cursor: "pointer", // Pointer cursor on hover
                transition: "background-color 0.3s ease", // Smooth transition for hover effect
                marginLeft:"600px",
                marginTop:"30px"
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#5a3c80")} // Hover effect for a darker shade of purple
              onMouseOut={(e) => (e.target.style.backgroundColor = "#6A4C9C")} // Reset to original color on mouse out
            >
              View More
            </button>
          </div>
          <div className="col-4">
            <img
              src="\Story\story1.jpg"
              alt="StoryImage"
              style={{
                width: "600px",
                height: "400px",
                marginTop: "70px",
                borderRadius: "5%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
