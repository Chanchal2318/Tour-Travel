import React from "react";

function SpritiualHero() {
  <link
    href="https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&display=swap"
    rel="stylesheet"
  ></link>;
  return (
    <>
      <h1
        style={{
          color: "#83628a",
          textAlign: "center",
          marginTop: "100px",
          fontSize: "70px",
          fontWeight: "600px",
          fontFamily: "Lavishly Yours",
        }}
      >
        Come Away With Us
      </h1>
      <h2
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: "#83628a",
          fontWeight: "lighter",
          fontFamily: "Lavishly Yours",
        }}
      >
        Dreaming of exploring India ?
      </h2>
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#83628a",
          fontWeight: "lighter",
          fontFamily: "Lavishly Yours",
          marginLeft: "350px",
          marginRight: "350px",
        }}
      >
        Let the team of dedicated tour guides, bring your holiday to life.
        Journey with us to the sacred destinations and come face to face with
        the Spiritual Gurus.{" "}
        <span
          style={{
            color: "#743089",
            fontWeight: "bold",
            fontFamily: "Lavishly Yours",
          }}
        >
          Spiritual India Tours
        </span>{" "}
        is a team comprising of the best travel guides having enormous
        experience of to urs and travel industry. With our travel consultants
        and tour guidetaking care of every detail, you can relax and enjoy every
        moment of the journey.
      </h2>

      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#83628a",
          fontWeight: "lighter",
          fontFamily: "Lavishly Yours",
          marginLeft: "350px",
          marginRight: "350px",
        }}
      >
        <span
          style={{
            color: "#743089",
            fontWeight: "bold",
            fontFamily: "Lavishly Yours",
          }}
        >
          Spiritual India Tours
        </span>{" "}
        is not any other tours and travels company. The travel experts look into
        the specific travel goals of the tourists and create the customized
        travel plan. The travel specialists go one step further to take care of
        every small need while you travel with us. With us, you will see a
        completely new picture of the amazing tourism in India.
      </h2>
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#83628a",
          fontWeight: "lighter",
          fontFamily: "Lavishly Yours",
          marginLeft: "350px",
          marginRight: "350px",
        }}
      >
        Our experienced specialists know the ins and outs of tourism in India.
        They will lead the way and provide you with the keys to the real India –
        the India only well traveled India and the best travel guides can share
        with you.
      </h2>
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#83628a",
          fontWeight: "lighter",
          fontFamily: "Lavishly Yours",
          marginLeft: "350px",
          marginRight: "350px",
          marginBottom: "70px",
        }}
      >
        Choose from one of our popular destination tours or{" "}
        <a href="#" alt="Link for contact page" style={{ color: "#83682a" }}>
          <span style={{ color: "#83628a" }}>contact us</span>
        </a>{" "}
        help you pick the tour that fits you.
      </h2>

      {/* ---------------------------------------------Cards---------------------------------------------------------------------------- */}
      <div className="row">
        <div className="col-6">
        <div
            style={{
              width: "800px", // Card width
              border: "1px solid #ddd", // Light border
              borderRadius: "10px", // Rounded corners
              padding: "10px", // Padding inside the card
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for a card effect
              textAlign: "left", // Left alignment for content
              margin: "20px auto", // Center the card horizontally
              backgroundColor: "#fff", // Card background color,
              marginLeft:"300px"
            }}
          >
            <img
              src="/Spiritual/ladakh.webp"
              alt="Ladakh"
              style={{
                width: "100%", // Make the image fit the card width
                height: "350px", // Fixed height
                borderRadius: "8px", // Slight rounding of image corners
                marginBottom: "5px", // Space between image and text
              }}
            />
          </div>
        </div>
        <div className="col-6">
        <div
            style={{
              width: "800px", // Card width
              border: "1px solid #ddd", // Light border
              borderRadius: "10px", // Rounded corners
              padding: "10px", // Padding inside the card
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for a card effect
              textAlign: "left", // Left alignment for content
              margin: "20px auto", // Center the card horizontally
              backgroundColor: "#fff", // Card background color,
              marginRight:"300px"
            }}
          >
            <img
              src="/Spiritual/rajasthan.webp"
              alt="Ladakh"
              style={{
                width: "100%", // Make the image fit the card width
                height: "350px", // Fixed height
                borderRadius: "8px", // Slight rounding of image corners
                marginBottom: "5px", // Space between image and text
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SpritiualHero;
