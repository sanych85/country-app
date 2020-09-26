import styled from 'styled-components';
import {setGrid} from "../styles.function"
import {sizes} from "../styles.function"
export const Button = styled.button `
padding: 0.5rem 1rem;
background-color: ${({bgColor})=> bgColor || "crimson"};
color: ${({color})=> color || "white"};
text-transform: uppercase;
border-radius:5px;
margin: 1rem;

/* position: ${({position})=>position|| "static"};
top:50%;
right:10%;
transform: translate(10%, -50%); */
&:hover {
    cursor: pointer;
}
&:disabled {
    background-color: ${({bgColorDis})=> bgColorDis || "grey"};
    color: ${({color})=> color || "#ffffffa3"};
}
 `

 export const ButtonWrapper = styled.div ` 

 ${setGrid()};
 grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
 width: 50%;
@media (max-width: ${sizes.tablet}px) {
    grid-template-columns: repeat(auto-fit, minmax(6rem,1fr));
    width: 100%;
    grid-gap:0rem;
}
 `



export const AbsoluteButton = styled(Button) `
position: absolute;
top:${({top})=>top||"0rem"};
top:${({right})=>right||"0rem"};


 `
