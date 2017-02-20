import store from '../store';

const GuessHistoryReducer = (state=[], action) => {
	switch (action.type) {
		case "UPDATE_HISTORY": {
			const newGuess = action.payload;
			const guessHistory = store.getState().guessHistory;
			guessHistory.push(newGuess);
			return guessHistory;
			break;
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