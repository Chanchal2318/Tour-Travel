import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f8f9fa',
        padding: '40px 0',
        borderTop: '1px solid #dee2e6',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Logo and Copyright */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="path-to-your-logo.png" // Replace with your logo path
            alt="Logo"
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
          <span style={{ fontSize: '25px', color: '#6c757d', }}>© 2022</span>
        </div>

        {/* Sections */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexGrow: 1,
            gap: '40px',
          }}
        >
          {[1, 2, 3].map((_, index) => (
            <div key={index} style={{ textAlign: 'left' }}>
              <h5 style={{ fontWeight: 'bold', color: '#212529', fontSize: '30px' }}>
                Section
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: 'none',
                      color: '#6c757d',
                      fontSize: '25px',
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: 'none',
                      color: '#6c757d',
                      fontSize: '25px',
                    }}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: 'none',
                      color: '#6c757d',
                      fontSize: '25px',
                    }}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: 'none',
                      color: '#6c757d',
                      fontSize: '25px',
                    }}
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: 'none',
                      color: '#6c757d',
                      fontSize: '25px',
                    }}
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
