import React from 'react'
import IndianLogo from "../../img/indian4.png"

import {StyledImgWrapper} from "../StyledComponents/StyledImg"
import {LogoImg} from "./Logo.style"
const Logo = ({width, height}) => {
    return (
        <StyledImgWrapper width = {width} height = {height}>
            <LogoImg src = {IndianLogo} width = {width} height = {height} />
        </StyledImgWrapper>

 
    );
}

export default Logo;