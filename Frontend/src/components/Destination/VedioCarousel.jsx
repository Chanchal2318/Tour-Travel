import React, { useState } from "react";

const VideoCarousel = () => {
  const videos = [
    "/mountainTour.mp4",
    "/MountainVedio.mp4",
    "/MountainVedio1.mp4",
    "/MountainVedio2.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <video
        src={videos[currentVideoIndex]}
        controls
        autoPlay
        onEnded={handleVideoEnd}
        style={{
          width: "100%", // Full width of the screen
          height: "50vh", // Half the viewport height
          objectFit: "cover", // Maintains video quality and aspect ratio
        }}
      />
    </div>
  );
};

export default VideoCarousel;
