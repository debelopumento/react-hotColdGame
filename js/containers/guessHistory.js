import React, {component} from 'react';
import store from '../store';
import reactCSS from 'reactcss';


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
		const styles = reactCSS({
			'default': {
				guessHistory: {
					backgroundColor: '#11a8ab',
					padding: '3px',
					width: '300px',
					height: '80px',
					margin: '0 auto',
				},
				indivisualGuess: {
					backgroundColor: '#1a4e95',
					padding: '2px',
					marginRight: '5px',
				}
			}
		})	

		return (
			<div style={ styles.guessHistory }>
				<span style={ styles.indivisualGuess }>{this.state.guessHistory}</span>
			</div>
		);
	}
}


export default GuessHistory;
