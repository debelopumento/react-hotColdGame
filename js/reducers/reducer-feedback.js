import store from '../store'
import axios from 'axios'

const FeedbackReducer = (state='Make Your Guess!', action) => {
	switch (action.type) {
		case "UPDATE_FEEDBACK": {
			const goalNumber = store.getState().goalNumber;
			const newGuess = action.payload;
			const absoluteValue = Math.abs(newGuess - goalNumber);
			console.log(22, newGuess)
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
				} else {
					feedback = 'Correct!'
					alert('Correct!')
					const guessCount = store.getState().guessCount + 1
					const fewestGuess = store.getState().fewestGuess
					console.log(102, guessCount, 103, fewestGuess)
					if (guessCount < fewestGuess) {
						const url = 'http://localhost:6060/updateRecord/'
						axios.put(url + guessCount)
						.then(function() {
							console.log('updated fewest guess: ', guessCount)
						})
						.catch((e) => {console.error('Internal server error')})
					}					
				}
			}

			feedbackGenerator(absoluteValue);
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