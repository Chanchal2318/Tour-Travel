import React from "react";

function SpiritualCarousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000" // Set to 2 seconds
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
        </div>

        <div className="carousel-inner">
          {[
            "/Spiritual/spiritual1.webp",
            "Spiritual/spiritual6.png",
            "Spiritual/spiritual4.webp",
            "Spiritual/spiritual5.png",
            "Spiritual/spiritual6.png",
            "Spiritual/spiritual7.webp",
            "Spiritual/spiritual8.webp",
            "Spiritual/spiritual9.webp",
            "Spiritual/spiritual10.webp",
          ].map((src, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={src}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "700px", objectFit: "cover" }} // Improved image display
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "60px",
                    fontStyle: "italic", // Make the text italic
                    fontFamily: "'Cursive', sans-serif", // A stylish, cursive font
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Add shadow for a more stylish effect
                  }}
                >
                  India, the soul of the world....
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SpiritualCarousel;
