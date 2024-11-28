import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { Link } from "react-router-dom";



function MyNavbar() {
  return (
    <Navbar expand="lg">
      <Container >
      <Navbar.Brand href="#home">
          <img
            src="/TourLogo.jpg" // Replace with your logo URL or import
            alt="Logo"
            width="80"
            height="60"
            className="d-inline-block align-top"
          />
          {" "}
          Tour and Travel
        </Navbar.Brand>
        {/* <Navbar.Brand href="#home">Tour and Travel</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fs-5 me-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="fs-5 me-3">About</Nav.Link>
            <Nav.Link as={Link} to="/activity" className="fs-5 me-3">Things to Do</Nav.Link>
            <NavDropdown title="Destination" id="basic-nav-dropdown" className="fs-5 me-3">
              <NavDropdown.Item as={Link} to="/mountain" className="fs-5">Mountains</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/historical" className="fs-5">
                Historical Places
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Beaches" className="fs-5">Beaches</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/spiritual" className="fs-5">
                Spiritual
              </NavDropdown.Item>
            </NavDropdown>
          
            <Nav.Link href="#link" className="fs-5 me-3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;