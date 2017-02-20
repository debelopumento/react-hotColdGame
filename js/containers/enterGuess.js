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
		store.dispatch({type: "NEW_GUESS", payload: this.state.newGuess});
		store.dispatch({type: "UPDATE_FEEDBACK", payload: null});
	}

	handleChange(event) {
		const newGuess = event.target.value;
		this.state.newGuess = newGuess;
	}

	render() {
		return (
			<div>
				<div>
					<input type="text" onChange={this.handleChange} placeholder="enter your guess" />
				</div>
				<div>
					<button type="submit" onClick={this.handleSubmit}>Guess</button>
				</div>
			</div>
		);
	}
}
 

export default EnterGuess;