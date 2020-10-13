//We can name this index. if we are calling the folder, react automitacally looks for the index.js file.
import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">fairprice</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
