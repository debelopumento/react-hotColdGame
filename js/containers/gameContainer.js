
import React, {component} from 'react';
import EnterGuess from './enterGuess';
import HotOrCold from './hotOrCold';
import GuessCount from './guessCount';
import GuessHistory from './guessHistory';
import NavBar from './navBar';
import GameDoc from './gameDoc';
import store from '../store';

import reactCSS from 'reactcss';




class GameContainer extends React.Component {
	constructor() {
		super();
		this.state = {
		}
	}

	render() {
		

		return (
			<div className="gameContainer">
				<nav>
					<NavBar />
				</nav>
				<h2>HOT or COLD</h2>
				<div>
					<HotOrCold />
					<EnterGuess />
					<GuessCount />
				</div>
				<div>
					<GuessHistory />
				</div>
			</div>
		);
	}
}


export default GameContainer;