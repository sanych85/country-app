import styled from 'styled-components';
import {GridWrapper} from "../StyledComponents/Wrappers"
import {sizes,setBorder} from "../styles.function"
import {OutputSpan} from "../StyledComponents/Span.style"

export const ResultsWrapper = styled.div `
 ${setBorder()};
 background-color: ${props=>props.theme.thirdColor};
/* width: 60rem; */
padding:1rem;
text-transform:uppercase;

`

export const GameStatistics = styled(GridWrapper) `
width:50%;
grid-column: 1/-1;

grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)); 
@media (max-width:${sizes.xxlLarge}px) {
    width: 100%;
}
`

export const ResultSpan = styled(OutputSpan) `
color:${props=> props.theme.secondaryColor}
 `