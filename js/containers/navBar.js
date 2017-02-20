import React, {component} from 'react';
import store from '../store';
require ('babel-polyfill');
import ReactDOM from 'react-dom';
import App from '../components/app';


class NavBar extends React.Component {

	constructor() {
		super();
		this.state = {
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.showGameDoc = this.showGameDoc.bind(this);
	}

	handleSubmit(event) {		
		event.preventDefault();
		store.dispatch({type: "CLEAR_FEEDBACK", payload: null});
		store.dispatch({type: "CLEAR_HISTORY", payload: null});
		store.dispatch({type: "CLEAR_GUESS_COUNT", payload: null});
		store.dispatch({type: "GENERATE_NEW_NUMBER", payload: null});
	}

	showGameDoc(event) {
		console.log();
	}

	render() {
		return (
			<div>
				<form>
					<input type="submit" value="WHAT?" onClick={this.showGameDoc} />
					<input type="submit" value="+NEW GAME" onClick={this.handleSubmit} />
				</form>
			</div>
		);
	}
}
 

export default NavBar;
