import store from '../store';

const GuessHistoryReducer = (state=[], action) => {
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

export default GuessHistoryReducer;