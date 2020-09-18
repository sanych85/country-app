import React from 'react';
import {StyledImgWrapper,StyledImg} from "./StyledCpmponents/StyledImg"
const Img = ({src, width, height}) => {

    return (
        <StyledImgWrapper width={width} height = {height} >
            <StyledImg  src = {src} width={width} height = {height}/>
        </StyledImgWrapper>
    );
}

export default Img;