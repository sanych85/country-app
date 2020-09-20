import {
  SET_RANDOM_COUNTRY,
  SET_COUNTRY_ANSWER,
  START_NEW_GAME
} from "../actions/games.actions";

import {getAnswerCount,getRightAnswers} from "../redux-utils";
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
  countryAnswer: null,
  randomCountry: null,
  answers: {
    rightAnswers: 0,
    wrongAnswers: 0,
    totalAnswers: 0,
    rate: 0,
  },
  gameStatus: "",
  gamesArchive:{

  }

};
const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RANDOM_COUNTRY: {
      return {
        ...state,
        randomCountry: action.payload,
        countryAnswer: null,
      };
    }
    
    case SET_COUNTRY_ANSWER: {
      const answersData=state.answers
      const rightAnswers="rightAnswers";
      const wrongAnswers="wrongAnswers";
 
      if(state.answers.totalAnswers+1<3) {

        if (action.answer.toLowerCase() === action.country.name.toLowerCase()) {
          return {
            ...state,
            countryAnswer: action.answer,
   
            answers: getAnswerCount(rightAnswers, wrongAnswers, answersData)

          };
        } else {
            
          return {
              
            ...state,
            countryAnswer: action.answer,
            answers: getAnswerCount( wrongAnswers,rightAnswers, answersData) 


          };
        }
      
      }
      else {
         const id = uuidv4()
 
        if (action.answer.toLowerCase() === action.country.name.toLowerCase()) {

          return {
            ...state,
            countryAnswer: action.answer,
            gameStatus: "finish",
            answers: getAnswerCount( rightAnswers,wrongAnswers, answersData),
            gamesArchive: {
              ...state.gamesArchive,[id]:{
                id:id,
                rate:getRightAnswers( "rightAnswers", "wrongAnswers", answersData),
              }
            }
          };
        } else {  
          return {

            ...state,
            countryAnswer: action.answer,
            gameStatus: "finish",
            answers: getAnswerCount( wrongAnswers, rightAnswers, answersData),
            gamesArchive: {
              ...state.gamesArchive,[id]:{
                id:id,
                rate:getRightAnswers("wrongAnswers", "rightAnswers",answersData),
              }
            }
 
          };
        }

      }
    }
    case START_NEW_GAME: {
      return {
        
        ...state,
        randomCountry: null,
        countryAnswer: null,
        gameStatus: "run",

        answers: {
          ...state.answers,
            rightAnswers: 0,
            wrongAnswers: 0,
            totalAnswers: 0,
            rate: 0,
          
        }
    
     

      }
    }
    default: {
      return state;
    }
  }
};

export default gamesReducer;
