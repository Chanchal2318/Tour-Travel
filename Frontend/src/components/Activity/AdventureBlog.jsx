import React from "react";

function AdventureBlog() {
  const cardData = [
    {
      title: "Best Adventure Travel Books of 2024: Jólabókaflóð & Our Ultimate Travel Reads",
      image: "/Activity/adventure1.jpg", // Replace with the correct path
    },
    {
      title: "Best Adventure Travel Gadgets to Buy",
      image: "/Activity/adventure2.jpg", // Replace with the correct path
    },
    {
      title: "Balancing Body & Mind",
      image: "/Activity/adventure3.jpg", // Replace with the correct path
    },
  ];

  return (
    <>
      <h1
        style={{
          fontWeight: "500",
          fontSize: "60px",
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "50px",
        }}
      >
        Explore Our Adventure Travel Blog
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto", // Center the container
          padding: "0 50px", // Add padding to the left and right
          gap: "30px", // Add a gap between the cards
          maxWidth: "1600px", // Increased maximum width to accommodate larger images
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            style={{
              flex: "1", // Cards will take equal space
              minWidth: "300px", // Set a minimum width for each card
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              marginBottom:"70px"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%", // Ensure image covers 100% of the card width
                height: "500px", // Increased height for better image display
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                objectFit: "cover", // Ensures the image fills the container without distortion
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "25px", marginBottom: "10px", color: "#8B0000", textDecoration: "underline" }}>
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdventureBlog;
