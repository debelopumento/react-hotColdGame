import React, {component} from 'react';
import store from '../store';
require ('babel-polyfill');
import ReactDOM from 'react-dom';
import App from '../containers/app';
import reactCSS from 'reactcss';
import GameDoc from './gameDoc';

import {startNewGame, enterGuess, updateFeedback, updateHistory, updateGuessCount, getFewestGuess} from '../actions/index';

class NavBar extends React.Component {

	constructor() {
		super();
		this.state = {
			gameDocDisplay: false
		};
		this.startNewGame = this.startNewGame.bind(this);
		this.displayGameDoc = this.displayGameDoc.bind(this);
	}

	displayGameDoc(event) {
		this.setState((state) => ({gameDocDisplay: true}));
	}

	startNewGame(event) {		
		event.preventDefault();
		console.log(34)
		store.dispatch({type: "CLEAR_FEEDBACK", payload: null});
		store.dispatch({type: "CLEAR_HISTORY", payload: null});
		store.dispatch({type: "CLEAR_GUESS_COUNT", payload: null});
		store.dispatch({type: "GENERATE_NEW_NUMBER", payload: null});
		store.dispatch(getFewestGuess())
	}

	render() {
		const styles = reactCSS({
			'default': {
				navBar: {
					width: '95%',
					margin: '0 auto',
				},
				left: {
					background: 'rgba(0, 0, 0, 0)',
					color: 'white',
					border: '0px',
					float: 'left',
				},
				right: {
					background: 'rgba(0, 0, 0, 0)',
					color: 'white',
					border: '0px',
					float: 'right',
				}
			}
		})
		
		const gameDocDisplay = this.state.gameDocDisplay;
		return (
			<div>
				<form style={ styles.navBar }>
					<GameDoc />
					<input style={ styles.right } type="submit" value="+ NEW GAME" onClick={this.startNewGame} />
					
				</form>
			</div>
		);
	}
}
 

export default NavBar;
