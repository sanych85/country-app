import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbar,NavbarButton,ToggledWrapper,ToggledElem,UlWrapper,NavbarButtonWrapper } from "./Navbar.style";

import Logo from "../Logo/Logo";
const Navbar = ({ onChangeTheme }) => {

  const [toggledMenu, setToggledMenu] = useState(false);
  
  const showMenu = ()=> {
    setToggledMenu(prevShowMenu=>!prevShowMenu)
  }


  
  const toggleMenu  =()=> {
    setToggledMenu(false)
  }

  return (
    <StyledNavbar>
      <Logo width="5rem" height="5rem" />
      <UlWrapper toggledMenu = {toggledMenu} >
        <li>
          <NavLink to="/countries" onClick = {toggleMenu}>All countries</NavLink>
        </li>
        <li>
        
          <NavLink to="/games" onClick = {toggleMenu}>Play game</NavLink>
        </li>
      </UlWrapper>

      <NavbarButtonWrapper>
        <NavbarButton onClick={onChangeTheme} position="absolute">
          Change Theme
        </NavbarButton>
      </NavbarButtonWrapper>
      <ToggledWrapper onClick={showMenu}>
        <ToggledElem className= "toggled-1" toggledMenu ={toggledMenu}></ToggledElem>
        <ToggledElem className= "toggled-2" toggledMenu ={toggledMenu}></ToggledElem>
        <ToggledElem className= "toggled-3" toggledMenu ={toggledMenu}></ToggledElem>
      </ToggledWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
