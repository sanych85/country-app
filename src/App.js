import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux"
import {fetchAndSetServerData} from "./redux/actionsCreators/countriesActionCreators"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Countries from "./Pages/Countries/Countries";

import CountryDetail from "./Pages/Countries/CountryDetail";
import { AppWrapper } from "./Components/StyledCpmponents/AppWrapper.style";
import Games from "./Pages/Games/Games";
// import GamesContainer from "./Pages/Games/GamesContainer";
import {GlobalStyles} from "./Components/GlobalStyles"
import { ThemeProvider } from "styled-components";
// import {Button} from "./Components/StyledCpmponents/Button.style";
import {themes} from "./Components/themes";
// import {MainWrapper} from "./Components/StyledCpmponents/Wrappers"




const  App=()=> {
  const [theme, setTheme]= useState(themes[0])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAndSetServerData("https://restcountries.eu/rest/v2/all"));



    
  },[dispatch] );

const onChangeTheme = ()=> {
  themes.push(themes[0])
  themes.shift(themes[0])
  setTheme(themes[0])
}
  return (
    <BrowserRouter>
    <ThemeProvider theme = {theme}>
    <GlobalStyles/>
      <AppWrapper>
        <Navbar  onChangeTheme={onChangeTheme}/>
       
        <Switch>
      
          <Route path="/countries" exact component={Countries} />
          <Route path="/countries/:id" component={CountryDetail} exact />
          <Route path="/games" component={Games} exact/>
          {/* <Route path="/countries/region/:id" component={CountriesContainer} /> */}
          <Route path="/" exact component={Countries} />
        </Switch>
       
      </AppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
