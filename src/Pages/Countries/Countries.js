import React, { useState,useEffect,useCallback } from "react";
import Country from "./Country";
import { StyledListWrapper } from "./Countries.style";
import { useSelector, useDispatch } from "react-redux";

import Select from "../../Components/Select/Select";
import SelectorsDashBoard from "./Selectors/Selectors";
import { CountriespageWrapper } from "./Countries.style";
import Pagination from "../../Components/Pagination/Pagination";
import {
  fetchAndSetServerData,
  fetchSingleCountry,
 
} from "../../redux/actionsCreators/countriesActionCreators";
import Loader from "../../Components/Loader/Loader";

import {getCountries,getLoading} from "../../redux/Selectors/countriesSelectors"

const CountriesMapState = () => {
  const dispatch = useDispatch()
    const filteredCountryList = (quantity) => {

      return countriesList
        ? countriesList.filter((_, indexElem) => {
            return indexElem < quantity;
          })
        : null;
    };
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedItems, setPaginatedItems] = useState(null);

const countriesList = useSelector(getCountries)
const countryLoading = useSelector(getLoading);
  useEffect(()=> {
 if(countriesList) {
    setPaginatedItems(filteredCountryList(10))
    setCurrentPage(1)
 }
  },[countriesList])

  
  const selectCountry = (value) => {
    
    if(value==='all') {
      dispatch(fetchAndSetServerData(`https://restcountries.eu/rest/v2/all`));
    }
    else {
    }
    dispatch(fetchAndSetServerData(`https://restcountries.eu/rest/v2/region/${value}`));
    // history.push(`countries/region/${value}`)
  };


  





 

  const filteredCountries = useCallback((index = 0, quantity = 10, pagesListLength) => {
  
    if(countriesList) {
      const filteredItems = countriesList.filter((_, indexElem) => {
        if (index === 0) {
          setCurrentPage(1);
          return indexElem < quantity;
        } else {
          setCurrentPage(index + 1);
          // if(pagesListLength)
          return (
            indexElem <= (index + 1) * quantity && indexElem > index * quantity
          );
        }
      });
  
      setPaginatedItems(filteredItems);

    }
    return null

  },[countriesList]);

  const optionsData = [
    "Asia",
    "Europe",
    "Africa",
    "Oceania",
    "Americas",
    "Polar",
  ];


  
  return countryLoading? (
    <>
    <Loader/>
    </>
  )
  :(
  

    <CountriespageWrapper>
    <SelectorsDashBoard>
      <Select
        dataArray={countriesList}
        selectSomething={selectCountry}
        optionsData={optionsData}
      />
    </SelectorsDashBoard>
    <Pagination
      items={countriesList}
      itemsQuantityOnPage="10"
      paginatedItems={filteredCountries}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />

    {paginatedItems && (
      <StyledListWrapper>
        {/* // <Input placeholder = "start search by countru name" getInputName={getInputName}></Input> */}

        {paginatedItems.map((country, index) => {
          return (
            <Country
              country={country}
              key={country.name}
              fetchSingleCountry={fetchSingleCountry}
            />
          );
        })}
      </StyledListWrapper>
    )}
  </CountriespageWrapper>
  );
};



export default CountriesMapState;
