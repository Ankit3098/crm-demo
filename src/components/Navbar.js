import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import "./Navbar.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="mb-5">
      <Navbar fixed="top" color="light" light expand="md">
        <NavLink to="/" className="navbarBrand" id="RouterNavLink">
          Agile Infoways
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-3">
              <NavLink
                exact
                id="RouterNavLink"
                activeClassName="activeNav"
                to="/"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem className="mr-3">
              <NavLink
                id="RouterNavLink"
                activeClassName="activeNav"
                to="/signup"
              >
                SignUp
              </NavLink>
            </NavItem>
            <NavItem className="mr-3">
              <NavLink
                id="RouterNavLink"
                activeClassName="activeNav"
                to="/login"
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem className="mr-3">
              <NavLink
                id="RouterNavLink"
                activeClassName="activeNav"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
