import store from '../store';

const GuessHistoryReducer = (state=[], action) => {
	switch (action.type) {
		case "UPDATE_HISTORY": {
			const newGuess = parseInt(action.payload);
			const guessHistory = store.getState().guessHistory;
			//check if this new guess is in history
			const indexOfNewGuess = guessHistory.indexOf(newGuess);
			if (indexOfNewGuess === -1) {
				guessHistory.push(newGuess);
				return guessHistory;
				break;
			} else {
				alert('You guessed this number already');
				return state;
				break;
			}
		}
		case "CLEAR_HISTORY": {
			const newHistory = [];
			return newHistory;
			break;
		}
	}
	return state;
}

export default GuessHistoryReducer;