const GoalNumberReducer = (state = null, action) => {
	//get a random number from 1-100;	
	console.log('existing goal number', state);
	switch (state) {
		case null: {
			const goalNumber = Math.floor(Math.random()*100);
			console.log('the goal number is: ', goalNumber);
			return goalNumber;
		}
	}
	return state;
} 

export default GoalNumberReducer;