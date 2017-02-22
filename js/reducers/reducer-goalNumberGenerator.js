const GoalNumberReducer = (state = null, action) => {
	//get a random number from 1-100;	
	switch (action.type) {
		case "GENERATE_NEW_NUMBER": {
			const goalNumber = Math.floor(Math.random()*100);
			console.log('the goal number is ar: ', goalNumber);
			return goalNumber;
		}
	}
	return state;
} 

export default GoalNumberReducer;