const NewGuessReducer = (state=null, action) => {
	switch (action.type) {
		case "NEW_GUESS": {
			const newGuess = action.payload;			
			return newGuess;
			break;
		}
	}
	return state;
}

export default NewGuessReducer;