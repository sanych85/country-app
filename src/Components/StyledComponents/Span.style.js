import styled from "styled-components";
import { setColor,color } from "../styles.function";


export const OutputSpan = styled.span`
  /* ${setColor(color.royalBrown)}
  padding-left:0.5rem; */
  color:${props=>props.color==="secondary"?props.theme.secondaryColor: props.theme.primaryColor};
  font-weight: bold;
  text-align: left;
  padding-left: ${props=>props.paddingLeft||"0rem"};
  /* padding-left: 0.6rem; */
  /* text-transform:uppercase; */
  
`;


export const CommonSpan = styled.span `
  color:${props=>props.theme.fourthColor};
  text-align: left;
  font-size: 1rem;
  padding-left: 0.5rem;
  
 `
