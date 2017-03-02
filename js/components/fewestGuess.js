
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

	/*
	componentWillUpdate() {
		store.dispatch({type: "GET_FEWESTGUESS", payload: null})
	}
	*/

	handelclick(event) {
		//store.dispatch({type: "GET_FEWESTGUESS", payload: null})
		store.dispatch(getFewestGuess());
		/*
		console.log('break')
		axios.get('http://localhost:6060/fewestGuess')
			.then(function(res) {
				state = res.data[0].guessCount
				console.log(100, state, 101, res)
				return state
			})
			.catch((e) => {console.error('Internal server error')})
		*/
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
			<div>
			<div style={ styles.fewestGuessDisplay }>Fewest Guess: <span style={ styles.guessCount }>{this.state.fewestGuess}</span>
			</div><button type="submit" onClick={this.handelclick}>fetch</button></div>
		);
	}
}

export default FewestGuess
