import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "./images/Asset 9@4x.png";

const NavigationBar = () => {
  return (
    <Navbar id="navBar" className="navbar navbar-expand-lg">
      <Navbar.Brand href="#home"><img src={logo} alt="Logo" style={{ width: '50px' }} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link1">Link 1</Nav.Link>
          <Nav.Link href="#link2">Link 2</Nav.Link>
          {/* Agrega más enlaces según sea necesario */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
