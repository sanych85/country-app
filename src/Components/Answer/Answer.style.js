import styled from 'styled-components';
import {setFlex, setBorder,linearGradient,getPadding} from "../../Components/styles.function"
export const AnswerWrapper = styled.div `
${setFlex()};
/* ${setBorder("2px")}; */
background: ${({type})=> type==="wrong"?linearGradient.orange:linearGradient.light};
margin: 1rem;
padding:1rem;
font-weight: bold;
text-transform:uppercase;
;
/* ${getPadding(1,1,1,1)}; */
/* height: 5rem; */
 `