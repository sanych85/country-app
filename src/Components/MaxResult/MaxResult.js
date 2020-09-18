import React from "react";
import { MaxResultWrapper } from "./MaxResult.style";
const MaxResult = React.memo(({ maxResult }) => {

  const getMaxResult = (maxResult) => {
    if (maxResult) {
      return (
        <MaxResultWrapper>
          <span>Max Result</span>
          <span>{maxResult}%</span>
        </MaxResultWrapper>
      );
    }
    else {
      return (
        <MaxResultWrapper>
          <span>MaxResult</span>
        <span>0</span>
      </MaxResultWrapper>
      )

    }

  };
  return <>{getMaxResult(maxResult)}</>;
});

export default MaxResult;
