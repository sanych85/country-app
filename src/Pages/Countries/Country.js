import React from "react";
import { StyledListElem } from "./Countries.style";
import {
  StyledImgWrapper,
  StyledImg,
} from "../../Components/StyledComponents/StyledImg";
import { withRouter } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";


const Country = ({
  country: { name, flag, population, region, capital },
  history,
}) => {
  const redirect = () => {
    history.push(`countries/${name}`);
  };

  return (
    <>
      <StyledListElem onClick={redirect}>
        <Heading type="h4">{name}</Heading>
        <StyledImgWrapper width="2rem" height="2rem">
          <StyledImg src={flag} alt=""></StyledImg>
        </StyledImgWrapper>
      </StyledListElem>
    </>
  );
};

export default withRouter(Country);
