import {combineReducers} from 'redux';
//import EnterGuessReducer from './reducer-enterGuess';
import GuessHistoryReducer from './reducer-guessHistory';



const allReducers = combineReducers({
	//enterGuess: EnterGuessReducer,
	guessHistory: GuessHistoryReducer
});

export default allReducers;