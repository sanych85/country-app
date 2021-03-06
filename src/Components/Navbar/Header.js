import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  StyledNavbar,
  NavbarButton,
  ToggledWrapper,
  ToggledElem,
  UlWrapper,
  NavbarButtonWrapper,
  StyledHeader
} from "./Header.style";

import Logo from "../Logo/Logo";
const Header = ({ onChangeTheme }) => {
  const [toggledMenu, setToggledMenu] = useState(false);

  const showMenu = () => {
    setToggledMenu((prevShowMenu) => !prevShowMenu);
  };

  const toggleMenu = () => {
    setToggledMenu(false);
  };

  return (
    <StyledHeader>
      <StyledNavbar>
        <Logo width="5rem" height="5rem" />
        <UlWrapper toggledMenu={toggledMenu}>
          <li>
            <NavLink to="/countries" onClick={toggleMenu}>
              All countries
            </NavLink>
          </li>
          <li>
            <NavLink to="/games" onClick={toggleMenu}>
              Play game
            </NavLink>
          </li>
        </UlWrapper>

        <NavbarButtonWrapper>
          <NavbarButton onClick={onChangeTheme} position="absolute">
            Ch Thm
          </NavbarButton>
        </NavbarButtonWrapper>
        <ToggledWrapper onClick={showMenu}>
          <ToggledElem
            className="toggled-1"
            toggledMenu={toggledMenu}></ToggledElem>
          <ToggledElem
            className="toggled-2"
            toggledMenu={toggledMenu}></ToggledElem>
          <ToggledElem
            className="toggled-3"
            toggledMenu={toggledMenu}></ToggledElem>
        </ToggledWrapper>
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
