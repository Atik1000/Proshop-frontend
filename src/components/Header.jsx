import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/">Proshop</Link>

        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/components/">
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>
            </NavItem>
            <NavItem>
              <Link to="#">
                <i className="fas fa-user"></i>Login
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
