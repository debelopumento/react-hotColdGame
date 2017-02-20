import React from 'react';
import {combineReducers} from 'redux';
import store from '../store';
import NewGuessReducer from './reducer-newGuess';
import GoalNumberReducer from './reducer-goalNumberGenerator';
import FeedbackReducer from './reducer-feedback';
import GuessCountReducer from './reducer-guessCount';
import GuessHistoryReducer from './reducer-guessHistory';



const allReducers = combineReducers({
	goalNumber: GoalNumberReducer,
	newGuess: NewGuessReducer,
	feedback: FeedbackReducer,
	guessCount: GuessCountReducer,
	guessHistory: GuessHistoryReducer
});

export default allReducers;

