import React from 'react';
import {combineReducers} from 'redux';
//import EnterGuessReducer from './reducer-enterGuess';
import GuessHistoryReducer from './reducer-guessHistory';
import store from '../store';



const GoalNumberReducer = (state = null, action) => {
	//get a random number from 1-100;
	
	
	console.log('existing goal number', state);
	switch (state) {
		case null: {
			const goalNumber = Math.floor(Math.random()*100);
			console.log('the goal number is: ', goalNumber);
			return goalNumber;
		}
	}
	return state;
} 

const CurrentGuessReducer = (state=null, action) => {
	switch (action.type) {
		case "NEW_GUESS": {
			return {...state, newGuess: action.payload};
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
