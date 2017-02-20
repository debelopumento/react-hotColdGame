import React, {component} from 'react';
import EnterGuess from '../containers/enterGuess';
import HotOrCold from '../containers/hotOrCold';
import GuessCount from '../containers/guessCount';
import GuessHistory from '../containers/guessHistory';
import NewGame from '../containers/newGame';
import store from '../store';

/*
store.subscribe(() => {
	console.log("subscribed store: ", store.getState());
})
*/




const App = () => {
	const abc = "some string 2";
	return 	<div>
				<nav>
					<NewGame />
				</nav>
				<h2>HOT or COLD</h2>
				<HotOrCold />
				<EnterGuess />
				<GuessCount />
				<GuessHistory />
			</div>;
}






export default App;

