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
              // ...state.answers,
              // rightAnswers: answersData.rightAnswers + 1,
              // totalAnswers:answersData.rightAnswers+1+answersData.wrongAnswers,
              // rate: ((answersData.rightAnswers+1)/(answersData.rightAnswers+1+answersData.wrongAnswers)).toFixed(2)*100
          };
        } else {
            
          return {
              
            ...state,
            countryAnswer: action.answer,
            // obj1,
            answers: getAnswerCount( wrongAnswers,rightAnswers, answersData) 
              // ...answersData,
              // wrongAnswers: answersData.wrongAnswers + 1,
              // totalAnswers:answersData.wrongAnswers+1+answersData.rightAnswers,
              // rate: (answersData.rightAnswers/(answersData.rightAnswers+answersData.wrongAnswers+1)).toFixed(2)*100

          };
        }
      
      }
      else {
         const id = uuidv4()
        // id={
        //  id:id,
        //  rate:state.answers.rate,
        // }
        
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
