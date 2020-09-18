// import {createSelector } from "reselect";
export const getCountries = (state=>state.country.countries)
// export const countries =  createSelector(
//     state=>state.country.countries
// )

export const getLoading = (state=>state.country.countryLoading)

