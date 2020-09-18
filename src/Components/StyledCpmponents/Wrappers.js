import styled from 'styled-components';
import {setFlex,setGrid, setShadow} from "../../Components/styles.function"

export const Wrapper = styled.div `
${setFlex()};
flex-direction: ${({flexDirection})=>flexDirection|| "row"} ;
background:${props=>props.theme.secondaryColor};
padding:1rem;
border-radius:1rem;
 `

 export const InnerWrapper  = styled.div `
/* ${setFlex()};
 flex-direction: column; */
 ${setShadow.dark}
/* border: 1px solid #000; */
display:grid;
margin:1rem;
padding:1rem;
width: ${({width})=>width || "inherit"};
height: ${({height})=>height || "inherit"};
text-align: center;
background:${props=>props.color||props.theme.secondaryColor};
border-radius:1rem;
justify-items:center;
align-items:center;
vertical-align:center;

span {
  /* color:${props=>props.theme.fourthColor}; */
  font-size: 1.1rem;

}
  `


export const GridWrapper = styled.div ` 
${setGrid("10rem")};
grid-column: 1/-1;
grid-template-rows: auto;

width: 100%;
`

export const MainWrapper =styled(GridWrapper) `
grid-template-columns: 1fr;
position: relative;


`


export const SpanWrapper =styled.div `
${setGrid()}
grid-template-columns: 25% 75%;
width: 100%;
${setShadow.bottomLight};
padding-top:1rem;
padding-bottom:1rem;
margin-top:0.5rem;
grid-gap:0rem;

 `

 export const DetailInnerWrapper = styled(InnerWrapper)`
 /* grid-template-columns: 20% 80%; */
 width: 100%;
 `
 export const ListOfItemsWrapper = styled(InnerWrapper)`
 width: 100%;
 margin:0rem;
 padding-left: 0.5rem;
 /* padding:0rem; */
 grid-gap:0rem;
 /* grid-template-columns: repeat(auto-fit, minmax(min-content, 1fr)) */
 box-shadow: none
 `