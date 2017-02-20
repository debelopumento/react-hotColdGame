import React from 'react';
import {combineReducers} from 'redux';
//import EnterGuessReducer from './reducer-enterGuess';
import GuessHistoryReducer from './reducer-guessHistory';
import store from '../store';
import GoalNumberReducer from './reducer-goalNumberGenerater';




const CurrentGuessReducer = (state=null, action) => {
	switch (action.type) {
		case "NEW_GUESS": {
			return action.payload;
			break;
		}
	}
	return state;
}


const allReducers = combineReducers({
	//enterGuess: EnterGuessReducer,
	goalNumber: GoalNumberReducer,
	newGuess: CurrentGuessReducer
	//guessHistory: GuessHistoryReducer
});

export default allReducers;







/*
const reducerA = (stateName=0, action) => {
	if (action.type === "currentGuess") {
		return stateName + action.payload;
		console.log(22);
	}
	return stateName;
}

const reducerB = (stateName={}, action) => {
	return stateName;
}
*/
