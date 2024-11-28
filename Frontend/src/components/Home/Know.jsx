import React from 'react';

function Know() {
  return (
    <>
      <div style={{ backgroundColor: 'white' , marginBottom:"80px"}}>
        <h1
          style={{
            fontWeight: 'bold',
            fontSize: '60px',
            marginLeft: '150px',
            marginTop: '50px',
          }}
        >
          Know Before You Go
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: '50px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <img
              src="/KnowFeatures/know1.webp"
              alt="Image1"
              style={{ width: '400px', height: '400px' }}
            />
            <h4 style={{ fontWeight: 'bold', marginTop: '10px' }}>Visa Regulations</h4>
            <a href="#" style={{textDecoration:"none", color:"purple", fontWeight:"bold", fontSize:"20px",marginBottom:"80px"}}>Learn More</a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/KnowFeatures/know2.webp"
              alt="Image2"
              style={{ width: '400px', height: '400px' }}
            />
            <h4 style={{ fontWeight: 'bold', marginTop: '10px' }}>Travel Guide</h4>
            <a href="#" style={{textDecoration:"none", color:"purple", fontWeight:"bold", fontSize:"20px",marginBottom:"80px"}}>Learn More</a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/KnowFeatures/know3.webp"
              alt="Image3"
              style={{ width: '400px', height: '400px' }}
            />
            <h4 style={{ fontWeight: 'bold', marginTop: '10px' }}>Getting Around</h4>
            <a href="#" style={{textDecoration:"none", color:"purple", fontWeight:"bold", fontSize:"20px",marginBottom:"80px"}}>Learn More</a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/KnowFeatures/know4.webp"
              alt="Image4"
              style={{ width: '400px', height: '400px' }}
            />
            <h4 style={{ fontWeight: 'bold', marginTop: '10px' }}>About India</h4>
            <a href="#" style={{textDecoration:"none", color:"purple", fontWeight:"bold", fontSize:"20px",marginBottom:"80px"}}>Learn More</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Know;
