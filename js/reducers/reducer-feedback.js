import store from '../store';


const FeedbackReducer = (state=null, action) => {
	switch (action.type) {
		case "UPDATE_FEEDBACK": {
			const goalNumber = store.getState().goalNumber;
			const newGuess = store.getState().newGuess;
			const absoluteValue = Math.abs(newGuess - goalNumber);

			let feedback = '';
			const feedbackGenerator = (absoluteValue) => {
				if (absoluteValue >= 30) {
					feedback =  'Cold!';
				} else if (absoluteValue >= 20) {
					feedback = 'Warmer than cold!';
				} else if (absoluteValue >= 10) {
					feedback = 'Warm!';
				} else if (absoluteValue >=3) {
					feedback = "Hot!"
				} else if (absoluteValue != 0) {
					feedback = 'Super hot!'
				} else {feedback = 'Correct!'}
			}

			feedbackGenerator(absoluteValue);
			console.log('message: ', feedback);
			return feedback;
			break;
		}
		case "CLEAR_FEEDBACK": {
			const feedback = 'Make Your Guess!';
			return feedback;
			break;
		}
	}
	return state;
}

export default FeedbackReducer;