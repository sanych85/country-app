import {createGlobalStyle} from "styled-components"
import {sizes} from "./styles.function"
 export  const GlobalStyles = createGlobalStyle `
 * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
 }

 @media (max-width: ${sizes.tablet}px) {
     html {
         font-size:0.9rem;
     }
 }
 `