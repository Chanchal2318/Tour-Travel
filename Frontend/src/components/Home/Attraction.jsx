import React from "react";

function Attraction() {
  return (
    <>
        <h1 style={{  fontWeight: "700", fontSize:"60px", marginTop:"80px" , marginLeft:"100px", marginBottom:"80px"}}>
          Must-See Attractions
        </h1>

        <div className="row" style={{marginLeft:"150px"}}>
          <div className="col-4">
            <img src="/Attraction/attract1.webp" style={{width:"500px", height:"300px", borderRadius:"5%"}}/>
            <h3 style={{fontWeight:"bold",marginLeft:"180px", marginTop:"10px"}}>Maraya</h3>
          </div>
          <div className="col-4">
            <img src="/Attraction/attract2.webp" style={{width:"500px", height:"300px", borderRadius:"5%"}}/>
            <h3 style={{fontWeight:"bold", marginTop:"10px"}}>Preserved Tombs and Ancient Wonder</h3>
          </div>
          <div className="col-4">
            <img src="/Attraction/attract3.webp" style={{width:"500px", height:"300px", borderRadius:"5%"}}/>
            <h3 style={{fontWeight:"bold", marginTop:"10px"}}>Historic Jeddah</h3>
          </div>
        </div>
        <div style={{marginBottom:"150px"}}></div>
    </>
  );
}

export default Attraction;
