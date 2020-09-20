import {createSelector } from "reselect";
export const getRandomCountry = state=>state.games.randomCountry
export const getCountryAnswer = state=>state.games.countryAnswer
export const getAnswers = state=>state.games.answers
export const getTotalAnswers = state=>state.games.totalAnswers
export const getRate = state=>state.games.rate
export const getGameStatus = state=>state.games.gameStatus
export const getGamesArchive = state=>state.games.gamesArchive

//calculate max value in games archive to display it on screnn
export const getTotalMax=createSelector (
 [getGamesArchive], obj => {
    if( obj && Object.values(obj).length>0) {
        const arr = Object.values(obj)
     return  arr.sort((a, b)=> {
        if (b.rate > a.rate) {
            
          return 1;
        }
        if (b.rate < a.rate) {
          return -1;
        }
      
        return 0;
      })[0].rate;
     
    
    }
    return null

})




