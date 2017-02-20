import React from 'react';
import {combineReducers} from 'redux';
import store from '../store';
import GoalNumberReducer from './reducer-goalNumberGenerater';
import FeedbackReducer from './reducer-feedback';


const NewGuessReducer = (state=null, action) => {
	switch (action.type) {
		case "NEW_GUESS": {
			const newGuess = action.payload;			
			return newGuess;
			break;
		}
	}
	return state;
}


const GuessHistory = (state=[], action) => {
	switch (action.type) {
		case "UPDATE_HISTORY": {
			const newGuess = action.payload;
			const guessHistory = store.getState().guessHistory;
			guessHistory.push(newGuess);
			console.log(23, guessHistory);
			return guessHistory;
			break;
		}
	}
	return state;
}


const allReducers = combineReducers({
	goalNumber: GoalNumberReducer,
	newGuess: NewGuessReducer,
	feedback: FeedbackReducer,
	guessHistory: GuessHistory
});

export default allReducers;

