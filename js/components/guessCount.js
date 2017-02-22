import React, {component} from 'react';
import store from '../store';
import reactCSS from 'reactcss';

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
		const styles = reactCSS({
			'default': {
				guessCountLine: {
					fontSize: '25px',
					marginTop: '3px',
					paddingTop: '0',
				},
				guessCount: {
					fontSize: '35px',
					color: '#FFB430',
				}
			}
		})

		return (
			<div style={styles.guessCountLine}>
				Guess # <span style={styles.guessCount}>{this.state.guessCount}</span> !
			</div>
		);
	}
}


export default GuessCount;
