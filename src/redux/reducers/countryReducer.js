
import {FETCH_COUNTRIES,FETCH_COUNTRY, COUNTRY_LOADING,SEARCH_COUNTRY} from "../actions/countriesActions"
import {getFilteredElem} from "../../utils"
const initialState = {
    countries: null,
    currentCountry: null,
    countryLoading: false,
  
}

const countryReducer = (state=initialState, action)=> {
 switch(action.type) {
  
     case FETCH_COUNTRIES: {
   
         return {
             ...state, countries:action.payload,
             countryLoading:false
         }
     }

     case FETCH_COUNTRY: {
         return {
             ...state, currentCountry:action.payload
         }
     }

     case COUNTRY_LOADING: {
         return {
             ...state, countryLoading:action.payload
         }
     }
     case SEARCH_COUNTRY: {
         return {
             ...state, 
             countries: getFilteredElem(state.countries, "name", action.payload)

         }
     }
    
     default: {
        return state
     }
     
 }
}

export default countryReducer;