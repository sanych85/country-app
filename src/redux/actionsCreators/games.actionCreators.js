import {SET_RANDOM_COUNTRY,SET_COUNTRY_ANSWER,START_NEW_GAME} from "../actions/games.actions"
export const setRandomCountry = (payload)=> {
    return {type: SET_RANDOM_COUNTRY, payload}
}
export const setCountryAnswer = (answer,country)=> {
    return {type: SET_COUNTRY_ANSWER, country,answer}
}

export const startNewGame =(payload)=> {
    return {type:START_NEW_GAME, payload}
}