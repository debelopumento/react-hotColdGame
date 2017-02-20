
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
		const styles = reactCSS({
			'default': {
				gameBox: {
					padding: '3px',
					width: '300px',
					height: '200px',
					margin: '0 auto',
					borderRadius: '5px',
				},
				guessBox: {
					backgroundColor: '#3F4766',
					padding: '3px',
					width: '300px',
					height: '100px',
					margin: '0 auto',

				}
			}
		})

		return (
			<div className="gameContainer">
				<nav>
					<NavBar />
				</nav>
				<h1>HOT or COLD</h1>
				<div style={ styles.gameBox }>
					<HotOrCold />
					<div style={ styles.guessBox }>
						<EnterGuess />
						<GuessCount />
					</div>
					<GuessHistory />
				</div>
				
			</div>
		);
	}
}


export default GameContainer;