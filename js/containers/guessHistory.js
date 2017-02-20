import React, {component} from 'react';
import store from '../store';
import reactCSS from 'reactcss';

export class GuessHistory extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			guessHistory: null,
			guessNumber: 0
		}
		
		store.subscribe(() => {
			this.setState({
				guessHistory: store.getState().guessHistory,
				guessNumber: store.getState().guessNumber
			})
		})
	}
	
	render() {
		const styles = reactCSS({
			'default': {
				guessHistory: {
					backgroundColor: '#11a8ab',
					padding: '3px',
					paddingTop: '3px',
					width: '350px',
					height: '80px',
					margin: '0 auto',
				},
				indivisualGuess: {
					backgroundColor: '#1a4e95',
					paddingLeft: '8px',
					paddingRight: '8px',
					paddingBotton: '8px',
					marginRight: '5px',
					marginTop: '5px',
					borderRadius: '3px',
				}
			}
		})		
		
		if (this.state.guessNumber != 0) {
			const abc = this.state.guessHistory;
			const listItems = abc.map((number) =>
				<span style={ styles.indivisualGuess }>{number}</span>
			)

			return (
				<div style={ styles.guessHistory }>
					{listItems}
				</div>
			);
		}
		else return (<div style={ styles.guessHistory }> </div>);
		
	}
}

export default GuessHistory;
