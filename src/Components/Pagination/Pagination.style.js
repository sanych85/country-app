import styled from 'styled-components';
import {setFlex, setColor,setBorder,setTransition} from "../../Components/styles.function"
export const PageListWrapper = styled.ul `
${setFlex()}
 `
 export const PageListElem =styled.li ` 
 /* ${setBorder()}; */
 width:2rem;
 height:2rem;
 list-style:none;
 text-align:center;
 ${setColor("royalBlue")};
 color: ${props=>props.theme.paginationColor};
 ${setTransition()};
 &.active {
     background-color: ${props=>props.theme.secondaryColor};
 }
 &:hover {
     cursor:pointer;
 }
 a {
     text-decoration:none;
 }
 `
 export const PaginationWrapper= styled.div `
 display:inline-flex;
 position: relative;

  `

  export const MainPaginationWrapper = styled.div `
  display: flex;
  justify-content:center;
  align-items:center;
  z-index: 10;
   `