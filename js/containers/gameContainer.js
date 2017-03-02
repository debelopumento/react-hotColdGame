
import React, {component} from 'react';
import EnterGuess from '../components/enterGuess';
import HotOrCold from '../components/hotOrCold';
import GuessCount from '../components/guessCount';
import GuessHistory from '../components/guessHistory';
import NavBar from '../components/navBar';
import GameDoc from '../components/gameDoc';
import store from '../store';
import FewestGuess from '../components/fewestGuess';
import reactCSS from 'reactcss';

class GameContainer extends React.Component {
	constructor() {
		super();
		this.state = {
		}
	}

	componentWillMount() {
		store.dispatch({type: "GENERATE_NEW_NUMBER", payload: null})
		
	}


	render() {
		const styles = reactCSS({
			'default': {
				nav: {
					height: '50px',
					paddingTop: '15px',
				},
				gameBox: {
					padding: '3px',
					width: '350px',
					margin: '0 auto',
					borderRadius: '5px',
				},
				guessBox: {
					backgroundColor: '#3F4766',
					padding: '3px',
					width: '350px',
					height: '200px',
					margin: '0 auto',

				}
			}
		})

		return (
			<div className="gameContainer">

				<nav style={ styles.nav }>
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
				<FewestGuess />
			</div>
		);
	}
}


export default GameContainer;