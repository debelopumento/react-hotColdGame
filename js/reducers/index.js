import React from 'react';
import {combineReducers} from 'redux';
import store from '../store';
import GoalNumberReducer from './reducer-goalNumberGenerater';


const FeedbackReducer = (state=null, action) => {
	switch (action.type) {
		case "UPDATE_FEEDBACK": {
			const goalNumber = store.getState().goalNumber;
			const newGuess = store.getState().newGuess;
			const absoluteValue = Math.abs(newGuess - goalNumber);

			let feedback = '';
			const feedbackGenerator = (absoluteValue) => {
				if (absoluteValue >= 30) {
					feedback =  'Cold!';
				} else if (absoluteValue >= 20) {
					feedback = 'Warmer than cold!';
				} else if (absoluteValue >= 10) {
					feedback = 'Warm!';
				} else if (absoluteValue != 0) {
					feedback = 'Hot!'
				} else {feedback = 'Correct!'}
			}

			feedbackGenerator(absoluteValue);

			console.log('message: ', feedback);

			return feedback;
			break;
		}
	}
	return state;
	
}

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


const allReducers = combineReducers({
	goalNumber: GoalNumberReducer,
	newGuess: NewGuessReducer,
	feedback: FeedbackReducer
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

*/
