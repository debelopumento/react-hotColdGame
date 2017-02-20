import React, {component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import store from '../store';


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

		store.dispatch({type: "NEW_GUESS", payload: this.state.newGuess});
		store.dispatch({type: "UPDATE_FEEDBACK", payload: null});
		store.dispatch({type: "UPDATE_HISTORY", payload: this.state.newGuess});
		store.dispatch({type: "UPDATE_GUESS_COUNT", payload: null});
		this.refs.numberInput.value = '';

	}

	handleChange(event) {
		const newGuess = event.target.value;
		this.state.newGuess = newGuess;
	}

	render() {
		return (
			<div>
				<form>
					<div>
						<input type="text" ref="numberInput" onChange={this.handleChange} placeholder="enter your guess" />
					</div>
					<div>
						<input type="submit" value="Guess" onClick={this.handleSubmit} />
					</div>
					</form>
			</div>
		);
	}
}
 

export default EnterGuess;