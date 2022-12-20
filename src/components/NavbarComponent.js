import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand to="/home">Siang-Malam</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <NavDropdown title="Daftar Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="/makanan">Makanan</NavDropdown.Item>
          <NavDropdown.Item href="/minuman">Minuman</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar>
  )
}
