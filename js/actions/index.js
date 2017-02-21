//things you can do in a game: 'Enter your Guess', 'Start a New Game', 'See tutorials'.




export const ENTER_GUESS = 'ENTER_GUESS';
export const enterGuess = newGuess => ({
	type: ENTER_GUESS,
	payload: newGuess
});


export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
	type: START_NEW_GAME,
	startNewGame
});


export const CHECK_OUT_TUTORIAL = 'CHECK_OUT_TUTORIAL';
export const checkOutTutorial = () => ({
	type: CHECK_OUT_TUTORIAL,
	checkOutTutorial
});



