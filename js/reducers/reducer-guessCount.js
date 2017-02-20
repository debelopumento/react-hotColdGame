import store from '../store';

const GuessCountReducer = (state=0, action) => {
	switch (action.type) {
		case "UPDATE_GUESS_NUMBER": {
			let guessCount = store.getState().guessCount;
			guessCount = guessCount + 1;
			return guessCount;
			break;
		}
	}
	return state;
}

export default GuessCountReducer;