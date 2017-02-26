const NewGuessReducer = (state=null, action) => {
	switch (action.type) {
		case "NEW_GUESS": {
			state = action.payload;			
			console.log(21, state)
			return state;
			break;
		}
	}
	return state;
}

export default NewGuessReducer;