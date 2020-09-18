import {combineReducers,createStore,applyMiddleware,compose } from "redux";
import countryReducer from "./reducers/countryReducer";
import gamesReducer from "./reducers/gamesReducers";
import logger from  "redux-logger";
import thunk from "redux-thunk"




const rootReducer = combineReducers({
country:countryReducer,
games:gamesReducer 
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,logger)));

export default store;