import styled from "styled-components";
import {setFlex,setShadow,setGrid,setBorder } from "../../Components/styles.function"
import {GridWrapper} from "../../Components/StyledComponents/Wrappers"

import {
  StyledImgWrapper,

} from "../../Components/StyledComponents/StyledImg";
export const GamesWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  ${setGrid()}
  /* grid-template-columns: 1fr;  */
  width: 80%;
  

`;

export const NewButton = styled.button``;



export const TipButton = styled(NewButton)`
  /* background-color: black; */
  ${setFlex()}
  color: white;
  ${setShadow.dark};
  &:hover {
  }
`;

export const AnswerMainWrapper = styled.div ` 
/* height: 3rem; */
padding:0.5rem;
`

export const GamesImgWrapper = styled(StyledImgWrapper) `
/* ${setBorder({width:"10px", type:"double", color:"red"})}; */
box-sizing:content-box;
 `

 export const GamesMainWrapper = styled(GridWrapper) `
 grid-template-columns: 1fr;
 position: relative;
 `