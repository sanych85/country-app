import styled from "styled-components";
import {
  setFlex,
  setGrid,
} from "../styles.function";

import { Button } from "../StyledComponents/Button.style";
import { sizes } from "../styles.function"; 


export const StyledHeader = styled.header `
width: 100vw;
`

export const StyledNavbar = styled.nav`
  width: 100%;

  ${setGrid()}
  grid-column:1/-1;
  grid-template-columns: minmax(1rem, 7rem) 1fr minmax(3rem, 10rem);
  position: relative;
  align-self: start;

  background: ${(props) => props.theme.secondaryColor};
  @media (max-width: ${sizes.tablet}px) {
    grid-template-columns: 1fr 3fr;
  }
`;




export const UlWrapper = styled.ul`
  ${setFlex()}
  li {
    list-style: none;
    margin: 0 1rem;

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.2rem;

      color: ${(props) => props.theme.thirdColor};
      &.active {
        color: ${(props) => props.theme.thirdColorHover};
      }
      &:hover {
        color: ${(props) => props.theme.thirdColorHover};
      }
    }
  }
  @media (max-width: ${sizes.tablet}px) {
  
    position: absolute;
    top: 0;
  
    flex-direction: column;
    width: 100%;
    background: ${(props) => props.theme.primaryColor};
    min-height: 100vh;
    z-index: 999;
    /* margin:2rem; */
  
    transform: ${({toggledMenu})=>toggledMenu? "translateX(0)": "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    position:fixed;
    top: 0;
    right: 0;
    li {
      a {
        font-size:2rem;
       
       
      }
      &:not(:first-child) {
        margin-top:1rem;
        
     
     
      }
    }   
  }
`;

export const NavbarButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.fourthColor};
`;

export const NavbarButtonWrapper = styled.div`
  @media (max-width: ${sizes.tablet}px) {
    /* display: none; */
    /* position: absolute; */

  }
`;

export const ToggledElem = styled.div`
  width: 30px;
  height: 3px;
  background-color: #d47d1a;
  z-index: 999;
  margin: 6px;

  transition: all 0.3s cubic-bezier(0.59, 0.09, 0.85, 0.23);
  position:absolute;
    left:5%;

  
  &.toggled-1 {
        /* top:-2px; */
        /* transform: translateX(-50%); */
      /* transform: ${({toggledMenu})=> toggledMenu?"rotate(45deg)":"rotate(0deg)"};
      left: ${({toggledMenu})=> toggledMenu?"3px":""} */
      transform:${({toggledMenu})=> toggledMenu?"translate3d(0,0,0) rotate(45deg)": "translate3d(0,-8px,0)"}
  }
  &.toggled-2 {
      /* display:${({toggledMenu})=> toggledMenu?"none":"block"} */
      transform:${({toggledMenu})=> toggledMenu?"translate3d(0,0,0) scale(0.1,1)":"translate3d(0,0,0)"}
      /* transform:translate3d(0,0,0); */

  }

  &.toggled-3 {
      /* display:${({toggledMenu})=> toggledMenu?"none":"block"} */
      /* bottom:-2px; */
      transform:${({toggledMenu})=> toggledMenu?"translate3d(0,0,0) rotate(-45deg)": "translate3d(0,8px,0)"}
  }

`;

export const ToggledWrapper = styled.div`
  width: 50px;
  height: 50px;
  z-index: 999;
  /* display: grid!important; */
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2%;
  border-radius: 10px;
  display: none;

  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;
  background-color: rgba(19, 11, 93, 0);
  border: 2px solid #e2e2e2;
  @media (max-width: ${sizes.tablet}px) {
    display: grid;
        position:fixed;
        top:5%;

  }
`;


