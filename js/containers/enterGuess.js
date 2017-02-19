import React, {component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



export default class EnterGuess extends React.Component {


	render() {
		return (
			<div>
				<input type="text" placeholder="enter your guess" />
			</div>
		);
	}
}
 
