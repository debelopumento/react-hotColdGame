import React, {component} from 'react';
import EnterGuess from '../containers/enterGuess';
import HotOrCold from '../containers/hotOrCold';
import GuessCount from '../containers/guessCount';
import GuessHistory from '../containers/guessHistory';
import NavBar from '../containers/navBar';
import GameDoc from '../containers/gameDoc';
import store from '../store';

const App = () => {
	return 	<div>
				<GameDoc />
				<div>
					<nav>
						<NavBar />
					</nav>
					<h2>HOT or COLD</h2>
					<HotOrCold />
					<EnterGuess />
					<GuessCount />
					<GuessHistory />
				</div>
				
			</div>;
}

export default App;

