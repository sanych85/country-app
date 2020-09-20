import React from "react";
import SvgElement from "./SvgComponents.style";
const LeftArrowSvg = ({ height, width, navigate }) => {



return (
    <div onClick={navigate}>
      <SvgElement
       width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="green" clip-rule="evenodd" stroke="darkRed"><path d="M21 24l-18-12 18-12v24zm-16.197-12l15.197 10.132v-20.263l-15.197 10.131"/>
      </SvgElement>
    </div>
  );
};
   


export default LeftArrowSvg;
