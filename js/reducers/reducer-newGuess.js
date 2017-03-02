const NewGuessReducer = (state=null, action) => {
	switch (action.type) {
		case "NEW_GUESS": {
			state = action.payload;			
			return state;
			break;
		}
	}
	return state;
}

export default NewGuessReducer;