import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { fetchSingleCountry } from "../../redux/actionsCreators/countriesActionCreators";
import { connect, useSelector } from "react-redux";
import { CardWrapper } from "../../Components/StyledCpmponents/CardWrapper";
import Img from "../../Components/Img";
import Loader from "../../Components/Loader/Loader";
import Heading from "../../Components/Heading/Heading";

import { DetailInnerWrapper,ListOfItemsWrapper } from "../../Components/StyledCpmponents/Wrappers";

import { Button } from "../../Components/StyledCpmponents/Button.style";
import ListOfItems from "../../Components/ListOfItems/ListOfItems";
const CountryDetail = ({ match, fetchSingleCountry, history }) => {
  // const {name, population,region, capital,flag} = useSelector(state=>state.country.currentCountry)
  const selectedCountry = useSelector((state) => state.country.currentCountry);
  const countryLoading = useSelector((state) => state.country.countryLoading);

  const displayCountry = (selectedCountry) => {
    if (selectedCountry && !countryLoading) {
      const {
        name,
        population,
        region,
        capital,
        flag,
        borders,
        languages,
        timezones,
        area,
        currencies,
      } = selectedCountry;


      const goback = () => {
        history.push("/countries");
      };
      return (
        <DetailInnerWrapper>
          <Heading type="h3" color="#fae07f">
            {name}
          </Heading>
          <Img src={flag} />
          {/* <div>
            <CommonSpan>population</CommonSpan>
            <OutputSpan> {population.toLocaleString('ru')}</OutputSpan>
          </div>
          <div>
            <CommonSpan>region</CommonSpan>
            <OutputSpan>{region}</OutputSpan>
          </div>
          <div>
            <CommonSpan>capital</CommonSpan>
            <OutputSpan>{capital}</OutputSpan>
          </div> */}
          <ListOfItemsWrapper>
            <ListOfItems singleElem={region} type="region" />
            <ListOfItems singleElem={population} type="population" />
            <ListOfItems singleElem={area} type="area" />
            
            <ListOfItems singleElem={capital} type="capital" />
            
            {/* <ListOfItems singleElem={} type="timezones"/> */}

            <ListOfItems array={borders} type="borders" />
            <ListOfItems array={languages} type="languages" />
            <ListOfItems array={currencies} type="currencies" />
            <ListOfItems array={timezones} type="timezones" />
          </ListOfItemsWrapper>

          <Button onClick={goback}>Back</Button>
        </DetailInnerWrapper>
      );
    } else {
      return <Loader />;
    }
  };
  //
  useEffect(() => {
    fetchSingleCountry(
      `https://restcountries.eu/rest/v2/name/${match.params.id}`
    );
  }, [fetchSingleCountry]);

  return <CardWrapper>{displayCountry(selectedCountry)}</CardWrapper>;
};

export default withRouter(connect(null, { fetchSingleCountry })(CountryDetail));
