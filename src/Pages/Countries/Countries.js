import React, { useState, useEffect, useCallback } from "react";
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

import {
  getCountries,
  getLoading,
} from "../../redux/Selectors/countriesSelectors";

const CountriesMapState = () => {
  const dispatch = useDispatch();
  const filteredCountryList = (quantity) => {
    return countriesList
      ? countriesList.filter((_, indexElem) => {
          return indexElem < quantity;
        })
      : null;
  };

  //using useState to set our current page
  const [currentPage, setCurrentPage] = useState(1);

  // we save all fetchted data then divide it on pages. When click any pages we receive countries that belong to this page
  const [paginatedItems, setPaginatedItems] = useState(null);

  const countriesList = useSelector(getCountries);
  const countryLoading = useSelector(getLoading);

  //type of region we transmit to our Select component
  const optionsData = [
    "Asia",
    "Europe",
    "Africa",
    "Oceania",
    "Americas",
    "Polar",
  ];
 
 // using useEffect to set initially our paginated items
  useEffect(() => {
    if (countriesList) {
      setPaginatedItems(filteredCountryList(10));
      setCurrentPage(1);
    }
  }, [countriesList]);

  //fetch country depending on selected value
  const selectCountry = (value) => {
    if (value === "all") {
      dispatch(fetchAndSetServerData(`https://restcountries.eu/rest/v2/all`));
    } else {
    }
    dispatch(
      fetchAndSetServerData(`https://restcountries.eu/rest/v2/region/${value}`)
    );
  };


// filtered country to display only that country that belong to this page
  const filteredCountries = useCallback(
    (index = 0, quantity = 10) => {
      if (countriesList) {
        const filteredItems = countriesList.filter((_, indexElem) => {
          if (index === 0) {
            setCurrentPage(1);
            return indexElem < quantity;
          } else {
            setCurrentPage(index + 1);
            // if(pagesListLength)
            return (
              indexElem <= (index + 1) * quantity &&
              indexElem > index * quantity
            );
          }
        });

        setPaginatedItems(filteredItems);
      }
      return null;
    },
    [countriesList]
  );



  return countryLoading ? (
    <>
      <Loader />
    </>
  ) : (
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
