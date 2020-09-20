import React from "react";
import {OutputSpan,CommonSpan} from "../StyledComponents/Span.style"

import {TipWrapper,TipInnerWrapper} from "../Tips/Tips.style"
const Tips = ({ country :{population, capital, region}}) => {
  return (
    <TipWrapper flexDirection = "column">
      <TipInnerWrapper>
        <CommonSpan>This country is located in </CommonSpan>
        <OutputSpan>{region}</OutputSpan>
      </TipInnerWrapper>
      <TipInnerWrapper>
        <CommonSpan>This country has population </CommonSpan>
        <OutputSpan>{population.toLocaleString('ru')} </OutputSpan>
      </TipInnerWrapper>
      <TipInnerWrapper>
        <CommonSpan>The capital of this country is </CommonSpan>
        <OutputSpan>{capital}</OutputSpan>
      </TipInnerWrapper>
    </TipWrapper>
  )
  }
export default Tips;
