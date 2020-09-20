
import axios from 'axios';
import {FETCH_COUNTRIES,FETCH_COUNTRY,COUNTRY_LOADING,SEARCH_COUNTRY} from "../actions/countriesActions"

import {setRandomCountry} from "../actionsCreators/games.actionCreators"

export const fetchData =(payload)=> {
    return {type: FETCH_COUNTRIES,payload }
}

export const setSingleCountry =(payload)=> {
    return {type:FETCH_COUNTRY, payload}
}

export const setCountryLoading =(payload)=> {
    return {type: COUNTRY_LOADING,payload}
}

export const searchCountry =(payload)=> {
    return {type: SEARCH_COUNTRY, payload}
}

export const fetchAndSetServerData = (url)=> {

    return (dispatch)=> {
        dispatch(setCountryLoading(true))
       
            axios.get(url)
            .then(response=> {
                dispatch(fetchData(response.data))
            })
            .catch( error => {
                console.log(error);
            } );
            
    }
}

export const fetchServerData = (url,data)=> {
    return (dispatch)=> {
   
        axios.get(url)
        .then(response=> {
            dispatch(fetchData(response.data))
            
        }).then(()=>dispatch(setRandomCountry(data)))
    }

}

export const fetchSingleCountry =(url)=> {
    return (dispatch)=> {
        dispatch(setCountryLoading(true))
        axios.get(url)
        .then(response=> {
   
            const {data:[{name,region,population,flag,capital,borders,currencies, languages, timezones,area}]} = response
            const countryData = {
                name,
                region,
                population,
                flag,
                capital,
                borders,
                timezones,
                languages,
                currencies,
                area
        
            }
       
            dispatch(setSingleCountry(countryData))
        }).then(()=>dispatch(setCountryLoading(false)))
    }
}

