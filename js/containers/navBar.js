import React, {component} from 'react';
import store from '../store';
require ('babel-polyfill');
import ReactDOM from 'react-dom';
import App from '../components/app';
import reactCSS from 'reactcss';

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

		const styles = reactCSS({
			'default': {
				navBar: {
					width: '95%',
					margin: '10px auto',
					display: 'flexbox',
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

		return (
			<div>
				<form style={ styles.navBar }>
					<input style={ styles.left } type="submit" value="WHAT?" onClick={this.showGameDoc} />
					<input style={ styles.right } type="submit" value="+NEW GAME" onClick={this.handleSubmit} />
				</form>
			</div>
		);
	}
}
 

export default NavBar;
