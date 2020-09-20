import styled from 'styled-components';
import {setGrid} from "../styles.function"
export const AppWrapper = styled.main `
${setGrid()};
grid-template-columns: 1fr;
grid-template-rows:5rem 1fr;
min-height: 100vh;
background: ${props=>props.theme.primaryColor}; 
`