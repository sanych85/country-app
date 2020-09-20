import styled from 'styled-components';

export const StyledImgWrapper = styled.div `
margin: 0 auto;
max-width: ${({width})=>width|| "20rem"};
height: ${({height})=>height|| "10rem"};
position: ${({position})=>position|| "static"};
top:0;
right:0;

/* width: 30rem;
height: 10rem; */
 `

 export const StyledImg = styled.img `
width: ${({width})=>width|| "20rem"};
height: ${({height})=>height|| "10rem"};
display: flex;
object-fit:cover;
 &:hover {
     cursor:pointer;
 }
  `