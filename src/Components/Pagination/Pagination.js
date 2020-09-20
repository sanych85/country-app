import React from "react";
import {
  PageListWrapper,
  PageListElem,
  PaginationWrapper,
  MainPaginationWrapper,
} from "./Pagination.style";
import { ArrowLength } from "../../img/left.svg";

import LeftArrow from "../../Components/SvgComponents/LeftArrow";
import RightArrow from "../../Components/SvgComponents/RightArrow";
import { useState } from "react";

const Pagination = ({
  items,
  itemsQuantityOnPage,
  paginatedItems,
  currentPage,
  setCurrentPage,
}) => {
  // assign observed page, page we change clicking right or left and change ot depending on terms
  const [observedPage, setObservedPage] = useState(0)


  const navigateBack = () => {
    if (observedPage > 1) {
      setObservedPage(observedPage-1)
    }
    else {
      setObservedPage(0)
    }
  };
  const navigateForward = (pagesList) => {

    if (observedPage < pagesList.length-5) {
      setObservedPage(observedPage+1)
    }
  };
  const getItems = (items, itemsQuantityOnPage) => {
    if (items) {
      const pages = Math.ceil(items.length / +itemsQuantityOnPage);
      const pagesList = [...Array(pages).keys()];

      return (
        <PaginationWrapper>
          <LeftArrow
            src={ArrowLength}
            position="absolute"
            width="2rem"
            height="2rem"
            navigate={() => navigateBack(pagesList)}></LeftArrow>
          
          <PageListWrapper>
            {pagesList
              .map((page) => (
                <PageListElem
                  key={page}
                  className={currentPage === page + 1 && "active"}
                  onClick={() => paginatedItems(page, itemsQuantityOnPage,pagesList.length)}>
                  {page + 1}
                </PageListElem>
              ))
              .filter((_, index) => {
                return index>= observedPage && index <  observedPage+5;
              })}
          </PageListWrapper>
          <RightArrow
            src={ArrowLength}
            position="absolute"
            width="2rem"
            height="2rem"
            navigate={() => navigateForward(pagesList)}></RightArrow>
        </PaginationWrapper>
      );
    }
    return;
  };

  return (
    <MainPaginationWrapper>
           {getItems(items, itemsQuantityOnPage)}
    </MainPaginationWrapper>
  );
};

export default Pagination;
