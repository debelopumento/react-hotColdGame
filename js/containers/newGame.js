import React, {component} from 'react';
import store from '../store';
require ('babel-polyfill');
import ReactDOM from 'react-dom';
import App from '../components/app';


class NewGame extends React.Component {

	constructor() {
		super();
		this.state = {
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {		
		event.preventDefault();
		console.log('may i continue');
		store.dispatch({type: "CLEAR_FEEDBACK", payload: null});
		store.dispatch({type: "CLEAR_HISTORY", payload: null});
		store.dispatch({type: "CLEAR_GUESS_COUNT", payload: null});
		store.dispatch({type: "GENERATE_NEW_NUMBER", payload: null});
	}

	render() {
		return (
			<div>
				<form>
				<input type="submit" value="New Game" onClick={this.handleSubmit} />
				</form>
			</div>
		);
	}
}
 

export default NewGame;
