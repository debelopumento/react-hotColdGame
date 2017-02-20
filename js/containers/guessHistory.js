import React, {component} from 'react';
import store from '../store';



export class GuessHistory extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			guessHistory: ''
		}
		
		store.subscribe(() => {
			this.setState({
				guessHistory: store.getState().guessHistory
			})
		})
	}
	
	render() {
		return (
			<div>
				<span>{this.state.guessHistory}</span>
			</div>
		);
	}
}


export default GuessHistory;
