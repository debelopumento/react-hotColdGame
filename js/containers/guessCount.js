import React, {component} from 'react';
import store from '../store';



export class GuessCount extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			guessCount: 0
		}
		
		store.subscribe(() => {
			this.setState({
				guessCount: store.getState().guessCount
			})
		})
	}
	
	render() {
		return (
			<div>
				<h4>Guess # {this.state.guessCount} !</h4>
			</div>
		);
	}
}


export default GuessCount;
