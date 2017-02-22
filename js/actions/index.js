
export const ENTER_GUESS = 'ENTER_GUESS';
export const enterGuess = newGuess => ({
	type: ENTER_GUESS,
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

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
	type: START_NEW_GAME,
	startNewGame
})

export const UPDATE_GUESS_COUNT = 'UPDATE_GUESS_COUNT';
export const updateGuessCount = () => ({
	type: UPDATE_GUESS_COUNT,
	payload: updateGuessCount
})





