import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to="/home"></Link> */}
            {/* <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link> */}
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/useref">Use Ref</Nav.Link>
            <Nav.Link as={Link} to="/usememo">Use memo</Nav.Link>
            <Nav.Link as={Link} to="/localstorage">Localstorage Example</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item href="about">
                About
              </NavDropdown.Item>
              <NavDropdown.Item href="/about/aboutdata">
                About Data
              </NavDropdown.Item>
              <NavDropdown.Item href="/about/aboutinfo">About Info</NavDropdown.Item>
              
              
            </NavDropdown>
            
            {/* <Nav.Link as={Link} to="/lifecycle">Lifecycle - Class</Nav.Link>
            <Nav.Link as={Link} to="/lifecyclefunc">Lifecycle - Function</Nav.Link>
            <Nav.Link as={Link} to="/COntext">Use Context</Nav.Link> */}
                 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu
