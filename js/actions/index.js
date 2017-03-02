import axios from 'axios'
import fetch from 'isomorphic-fetch'
import store from '../store';


export const NEW_GUESS = 'NEW_GUESS';
export const enterGuess = newGuess => ({
	type: NEW_GUESS,
	payload: newGuess
});

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const updateFeedback = newGuess => ({
	type: UPDATE_FEEDBACK,
	payload: newGuess
})

export const UPDATE_HISTORY = 'UPDATE_HISTORY';
export const updateHistory = newGuess => ({
	type: UPDATE_HISTORY,
	payload: newGuess
})



export const UPDATE_GUESS_COUNT = 'UPDATE_GUESS_COUNT';
export const updateGuessCount = () => ({
	type: UPDATE_GUESS_COUNT,
	payload: updateGuessCount
})

export const GET_FEWESTGUESS = 'GET_FEWESTGUESS'
export const getFewestGuess = () => {
	return function(dispatch) {
		axios.get('http://localhost:6060/fewestGuess')
			.then(function(res) {
				let fewestGuess = res.data[0].guessCount
				console.log(100, fewestGuess, 101, res)
				//fewestGuess = 10
				dispatch( {
					type: GET_FEWESTGUESS,
					payload: fewestGuess 
				})
			})
			.catch((e) => {console.error('Internal server error: ', e)})
	}
	
}

export const startNewGame = () => {
	console.log(44)
	store.dispatch({type: "CLEAR_FEEDBACK", payload: null});
	store.dispatch({type: "CLEAR_HISTORY", payload: null});
	store.dispatch({type: "CLEAR_GUESS_COUNT", payload: null});
	store.dispatch({type: "GENERATE_NEW_NUMBER", payload: null});
	getFewestGuess()
	
}