import React from "react";
import { StyledListElem } from "./Countries.style";
import { StyledImgWrapper, StyledImg } from "../../Components/StyledCpmponents/StyledImg";
import {withRouter} from "react-router-dom";
import Heading from "../../Components/Heading/Heading"

// import { connect } from "react-redux";
const Country = ({ country: { name, flag,population, region,capital },history }) => {
   const redirect = ()=> {
     history.push(`countries/${name}`)
   }


  return (
    <>
    
    <StyledListElem onClick= {redirect}>
      {/* <Link to= {`countries/${name}`}  ></Link> */}
      <Heading type = "h4">{name}</Heading>
      <StyledImgWrapper width = "2rem" height = "2rem">
        <StyledImg src={flag} alt="" ></StyledImg>
      </StyledImgWrapper>
      {/* <img src={flag} alt=""/> */}
    </StyledListElem>
    </>
  );
};

export default   withRouter(Country);
