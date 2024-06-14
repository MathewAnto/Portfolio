import React from 'react';
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';
import './HomeNavbar.css';

const HomeNavbar = () => {
  return (
    <div id='navbar'>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-warning bg-warning'/>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto">
              <NavItem>
                <Nav.Link href="#about">ABOUT</Nav.Link>
              </NavItem>
              <NavItem>
                <span className="nav-separator">|</span>
              </NavItem>
              <NavItem>
                <Nav.Link href="#tech-skills">SKILLS</Nav.Link>
              </NavItem>
              <NavItem>
                <span className="nav-separator">|</span>
              </NavItem>
              <NavItem>
                <Nav.Link href="#resume">RESUME</Nav.Link>
              </NavItem>
              <NavItem>
                <span className="nav-separator">|</span>
              </NavItem>
              <NavItem>
                <Nav.Link href="#say-hello">SAY HELLO!</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;
