import React from 'react';
import {combineReducers} from 'redux';
import store from '../store';
import GoalNumberReducer from './reducer-goalNumberGenerater';
import FeedbackReducer from './reducer-feedback';
import GuessCountReducer from './reducer-guessCount';
import GuessHistoryReducer from './reducer-guessHistory';
import NewGuessReducer from './reducer-newGuess';



const allReducers = combineReducers({
	goalNumber: GoalNumberReducer,
	newGuess: NewGuessReducer,
	feedback: FeedbackReducer,
	guessCount: GuessCountReducer,
	guessHistory: GuessHistoryReducer
});

export default allReducers;

