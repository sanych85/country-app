import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAndSetServerData } from "./redux/actionsCreators/countriesActionCreators";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Navbar/Header";
import Countries from "./Pages/Countries/Countries";

import CountryDetail from "./Pages/Countries/CountryDetail";
import { AppWrapper } from "./Components/StyledComponents/AppWrapper.style";
import Games from "./Pages/Games/Games";
import { GlobalStyles } from "./Components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "./Components/themes";

const App = () => {
  const [theme, setTheme] = useState(themes[0]);
  const dispatch = useDispatch();
//fetch all countries from server
  useEffect(() => {
    dispatch(fetchAndSetServerData("https://restcountries.eu/rest/v2/all"));
  }, [dispatch]);

  //change color team using styled components and Provider
  const onChangeTheme = () => {
    themes.push(themes[0]);
    themes.shift(themes[0]);
    setTheme(themes[0]);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppWrapper>
          <Header onChangeTheme={onChangeTheme} />

          <Switch>
            <Route path="/countries" exact component={Countries} />
            <Route path="/countries/:id" component={CountryDetail} exact />
            <Route path="/games" component={Games} exact />
            {/* <Route path="/countries/region/:id" component={CountriesContainer} /> */}
            <Route path="/" exact component={Countries} />
          </Switch>
        </AppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
