import React, {component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import store from '../store';



class HotOrCold extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: 'Make Your Guess!'
		}
		
		store.subscribe(() => {
			this.setState({
				feedback: store.getState().feedback
			})
		})
	}

	render() {
		return (
			<div>
				<h2>{this.state.feedback}</h2>
			</div>
		);
	}
}


export default HotOrCold;
