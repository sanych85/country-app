import React from "react";
import SvgElement from "./SvgComponents.style";
const LeftArrowSvg = ({ height, width, navigate }) => {
    return (
        <div onClick={navigate}>
          <SvgElement
            width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="green" stroke="darkRed"><path d="M3 24l18-12-18-12v24zm16.197-12l-15.197 10.132v-20.263l15.197 10.131"/>
          </SvgElement>
        </div>
    )
    }
export default LeftArrowSvg;
