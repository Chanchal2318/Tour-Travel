import React from "react";

function Contact() {
  return (
    <>
      <div>
        <div className="row" >
          <div className="col-6" >
            <h1
              style={{
                fontWeight: "semi-bold",
                marginLeft: "250px",
                marginTop: "50px",
                fontSize: "60px",
              }}
            >
              Contact Us
            </h1>
            <h3
              style={{
                fontWeight: "700",
                marginLeft: "250px",
                marginTop: "20px",
              }}
            >
              For any queries, contact us on our hotline
            </h3>
            <button
              style={{
                backgroundColor: "#6A2E8F", // Darker purple color
                color: "#fff", // White text color
                padding: "10px 20px", // Add some padding
                border: "none", // Remove the border
                borderRadius: "5px", // Rounded corners
                cursor: "pointer", // Pointer cursor on hover
                transition: "opacity 0.3s", // Smooth transition for opacity change
                fontWeight:"bold",
                marginLeft:"250px",
                marginTop:"30px", 
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.7")} // Reduce opacity on hover
              onMouseOut={(e) => (e.target.style.opacity = "1")} // Reset opacity on mouse out
            >
              Contact Us
            </button>
            <h1 style={{marginLeft:"250px", marginTop:"100px"}}>----------------------------------------------</h1>
          </div>
          
          <div className="col-6" >
            <img src="/Contact/contact.png" alt="Contact" style ={{width:"450px", height:"500px", marginLeft:"400px"}}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
