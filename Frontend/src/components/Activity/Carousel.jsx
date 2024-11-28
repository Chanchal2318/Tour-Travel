import React, { useEffect, useRef } from "react";


function Carousel() {
  const carouselRef = useRef(null);

  // Function to move to the next slide
  const goToNextSlide = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const carouselInstance = new window.bootstrap.Carousel(carousel);
      carouselInstance.next();
    }
  };

  useEffect(() => {
    // Autoplay functionality: move to next slide every 5 seconds
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <>
      {/* Carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        ref={carouselRef} // Reference the carousel for manual control
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/Activity/activity1.jpg"
              alt="First slide"
              style={{ width: "100%", height: "700px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/Activity/activity2.jpg"
              alt="Second slide"
              style={{ width: "100%", height: "700px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/Activity/activity3.jpg"
              alt="Third slide"
              style={{ width: "100%", height: "700px" }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only"></span>
        </a>
      </div>
    </>
  );
}

export default Carousel;
