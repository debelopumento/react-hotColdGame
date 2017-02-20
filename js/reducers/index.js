import React from 'react';
import {combineReducers} from 'redux';
import store from '../store';
import GoalNumberReducer from './reducer-goalNumberGenerater';
import FeedbackReducer from './reducer-feedback';
import GuessHistoryReducer from './reducer-guessHistory';
import NewGuessReducer from './reducer-newGuess';



const allReducers = combineReducers({
	goalNumber: GoalNumberReducer,
	newGuess: NewGuessReducer,
	feedback: FeedbackReducer,
	guessHistory: GuessHistoryReducer
});

export default allReducers;

