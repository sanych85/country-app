import React from "react";
import { AnswerWrapper } from "./Answer.style";
import {OutputSpan} from "../StyledCpmponents/Span.style"
const Answer = ({ country, answer, type }) => {
  const param = country[type].toLowerCase();
  const answerLowerCase = answer? answer.toLowerCase(): null


  const getAnswer = (param,answer) => {

    if (answer) {
      return param === answer ? (
        <AnswerWrapper >
          <span>It is right answer</span>
        </AnswerWrapper>
      ) : (
        <AnswerWrapper type = "wrong">
          <span>It is wrong answer. Right answer is  </span> <OutputSpan color = "secondary" paddingLeft = "0.5rem"> {country.name}</OutputSpan>
        </AnswerWrapper>
      );
    }
    return false;
  };
  return <>{getAnswer(param, answerLowerCase)}</>;
};

export default Answer;
