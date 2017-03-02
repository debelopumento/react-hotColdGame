import React, {component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import store from '../store';
import reactCSS from 'reactcss';
import {enterGuess, updateFeedback, updateHistory, updateGuessCount} from '../actions/index';

class EnterGuess extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newGuess: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {		
		event.preventDefault();
		store.dispatch({type: 'NEW_GUESS', payload: this.state.newGuess});
		store.dispatch(updateFeedback(this.state.newGuess));
		store.dispatch(updateHistory(this.state.newGuess));
		store.dispatch(updateGuessCount());
		this.refs.numberInput.value = '';
		
	}

	handleChange(event) {
		const newGuess = event.target.value
		this.state.newGuess = newGuess
	}

	render() {
		const styles = reactCSS({
			'default': {
				input: {
					backgroundColor: '#626F82',
					padding: '3px',
					width: '230px',
					height: '40px',
					marginTop: '20px',
					marginBottom: '10px',
					margin: '10 auto',
					borderRadius: '3px',
					border: '1px black solid',
				},
				button: {
					backgroundColor: '#1F253D',
					padding: '3px',
					width: '236px',
					height: '46px',
					marginTop: '10px',
					marginBottom: '5px',
					margin: '10 auto',
					borderRadius: '3px',
					border: '1px black solid',
					color: '#ffffff',
					fontSize: '20px',
				}
			}
		})

		return (
			<div>
				<form>
					<div>
						<input type="text" style={ styles.input } ref="numberInput" onChange={this.handleChange} placeholder="Enter Your Guess" />
					</div>
					<div>
						<input type="submit" style={ styles.button } value="Guess" onClick={this.handleSubmit} />
					</div>
					</form>
			</div>
		);
	}
}

export default EnterGuess;
