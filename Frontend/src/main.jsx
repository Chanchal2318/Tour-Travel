import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/Home/HomePage.jsx";
import App from "./App.jsx";
import DestinationPage from "./components/Destination/DestinationPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div style={{ backgroundColor: "rgba(250,250,250,1" }}>
        {/* <HomePage /> */}
        <App/>
        <DestinationPage/>
        
      </div>
    </BrowserRouter>
  </StrictMode>
);
