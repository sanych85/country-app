import React from "react";
import {
  
  InnerWrapper,

} from "../StyledCpmponents/Wrappers";
import {ResultsWrapper,GameStatistics} from "./Results.style"
import {ResultSpan} from "../Results/Results.style"
import {OutputSpan} from "../StyledCpmponents/Span.style"
import {CommonSpan} from "../StyledCpmponents/Span.style"

const Results = React.memo(({
  answers: { wrongAnswers, rightAnswers, totalAnswers, rate },
  gameStatus,
}) => {

  const renderResults = (gameStatus) => {
    if (gameStatus === "run") {
      return (
        <GameStatistics>
          <InnerWrapper width="100px" height="80px">
            <CommonSpan>Right</CommonSpan>
            <OutputSpan>{rightAnswers}</OutputSpan>
          </InnerWrapper>
          <InnerWrapper width="100px" height="80px">
            <CommonSpan>Wrong</CommonSpan>
            <OutputSpan>{wrongAnswers}</OutputSpan>
          </InnerWrapper>
          <InnerWrapper width="100px" height="80px">
            <CommonSpan>Total</CommonSpan>
            <OutputSpan>{totalAnswers}</OutputSpan>
          </InnerWrapper>
          <InnerWrapper width="100px" height="80px">
            <CommonSpan>Rate</CommonSpan>
            <OutputSpan>{rate}%</OutputSpan>
          </InnerWrapper>
        </GameStatistics>
      );
    } else if (gameStatus === "finish") {
      return (
        <ResultsWrapper >
          <p><span>game over.</span> <ResultSpan> Your rate is {rate}%</ResultSpan> </p>
          <span>Do you want to try more ? </span>
        </ResultsWrapper>
      );
    }
    return;
  };

  return <>{renderResults(gameStatus)}</>;
});

export default Results;
