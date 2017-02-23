import React from 'react'
import {combineReducers} from 'redux'
import store from '../store'
import NewGuessReducer from './reducer-newGuess'
import GoalNumberReducer from './reducer-goalNumberGenerator'
import FeedbackReducer from './reducer-feedback'
import GuessCountReducer from './reducer-guessCount'
import GuessHistoryReducer from './reducer-guessHistory'
import axios from 'axios'


const FewestGuessReducer = (state=30, action) => {
	switch (action.type) {
		case "GET_FEWESTGUESS": {
			axios.get('http://localhost:6060/fewestGuess')
			.then(function(res) {
				console.log(100, res)
				return state
			})
			.catch((e) => {console.error('Internal server error')})
		}
		case "UPDATE_FEWESTGUESS": {
			const url = 'localhost:6060/updateRecord/'
			const newRecord = action.payload
			axios.put(url + newRecord)
			.then(function() {
				console.log('updated fewest guess: ', newRecord)
				state = newRecord
			})
			.catch((e) => {console.error('Internal server error')})
			return state
		}
	}
	return state
}

const allReducers = combineReducers({
	goalNumber: GoalNumberReducer,
	newGuess: NewGuessReducer,
	feedback: FeedbackReducer,
	guessCount: GuessCountReducer,
	guessHistory: GuessHistoryReducer,
	fewestGuess: FewestGuessReducer
})

export default allReducers

