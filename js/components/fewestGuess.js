
import React, {component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import store from '../store'
import reactCSS from 'reactcss'
import axios from 'axios'
import fetch from 'node-fetch'
import {enterGuess, updateFeedback, updateHistory, updateGuessCount, getFewestGuess} from '../actions/index';

class FewestGuess extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fewestGuess: null
		};

		store.subscribe(() => {
			this.setState({
				fewestGuess: store.getState().fewestGuess
			})
		})
	}

	componentWillMount() {
		store.dispatch(getFewestGuess())
	}

	render() {
		const styles = reactCSS({
			'default': {
				fewestGuessDisplay: {
					padding: '5px',
				},
				guessCount: {
					color: '#FFB430',
				}
			}
		})
		console.log(300, this.state.fewestGuess)
		return (				
			<div style={ styles.fewestGuessDisplay }>Fewest Guess: <span style={ styles.guessCount }>{this.state.fewestGuess}</span>
			</div>
		);
	}
}

export default FewestGuess
