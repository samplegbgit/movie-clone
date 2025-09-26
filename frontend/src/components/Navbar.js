import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">MovieClone</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#">Top Rated</Nav.Link>
        <Nav.Link href="#">Search</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
