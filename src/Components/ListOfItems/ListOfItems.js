import React from "react";
import {
  OutputSpan,
  CommonSpan,
} from "../StyledComponents/Span.style";
import { SpanWrapper } from "../StyledComponents/Wrappers";
const ListOfItems = ({ array, type, singleElem }) => {
  const getSpan = (type, elem, index) => {
    if (type === "lastSpan") {
      return <OutputSpan key={index}>{elem}</OutputSpan>;
    } else {
      return <OutputSpan key={index}>{elem}, </OutputSpan>;
    }
  };

  const getItems = (array, type) => {

    if (array && array.length > 0) {
      return array.map((elem, index) => {
        if (type === "borders" || type === "timezones") {
          if (index < array.length - 1) {
            return getSpan(null, elem, index);
          } else {
            return getSpan("lastSpan", elem, index);
          }
        } else if (type === "languages" || type === "currencies") {
          const names = elem.name;

          if (index < array.length - 1) {
            return getSpan(null, names, index);
          } else {
            return getSpan("lastSpan", names, index);
          }
        }
        return null
      });
    }
    return;
  };
  return (
    <>
      {array ? (
        <SpanWrapper>
          <CommonSpan>{type}</CommonSpan>
          <div>{getItems(array, type)}</div>
        </SpanWrapper>
      ) : (
        <SpanWrapper>
          <CommonSpan>{type}</CommonSpan>
          <OutputSpan>{singleElem.toLocaleString('ru')}</OutputSpan>
        </SpanWrapper>
      )}
    </>
  );
};

export default ListOfItems;
