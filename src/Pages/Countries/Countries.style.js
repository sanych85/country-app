import styled from 'styled-components';
import {setGrid,setShadow,setTransition} from "../../Components/styles.function"
import {sizes} from "../../Components/styles.function"
export const StyledListWrapper = styled.ul `
display: grid;
/* grid-template-columns: repeat(4,1fr); */
${setGrid({ minWidth:"10rem", gap:"1rem"})}
width: 100vw;

/* min-height: 100vh; */
padding: 0rem;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); 
width: 100%;
@media (max-width:${sizes.tabled}) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}
 `

export const StyledListElem  = styled.li `
list-style: none;
display: grid;
justify-items: center;
align-items: center;
${setShadow.light};
background: ${props=>props.theme.thirdColor};
/* box-shadow: 0 0 10px rgba(0,0,0,0.5); */
width: 20rem;
height: 10rem;
${setTransition()};
&:hover {
    cursor: pointer;
    background: ${props=>props.theme.thirdColorHover} 
}

img {
    max-height: 2rem;
    max-width:3rem;
}

@media (max-width:${sizes.tablet}px) {
    width: 15rem;
    height: 8rem;
}

 `

 export const CountriespageWrapper = styled.div ` 
 display: grid;
 grid-template-rows: 4rem 1fr;
 grid-column:1/-1;
 width: 80%;
 grid-gap:1rem;
 @media (max-width:${sizes.tablet}px) {
    width: 100%;
}
 
 `





 