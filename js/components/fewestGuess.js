
import React, {component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import store from '../store';
import reactCSS from 'reactcss';


class FewestGuess extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fewestGuess: 0
		};

		store.subscribe(() => {
			this.setState({
				fewestGuess: store.getState().fewestGuess
			})
		})

	}


	render() {
		const styles = reactCSS({
			'default': {
				fewestGuessDisplay: {
					padding: '5px',
				},
				guessCount: {
					color: '#FFB430',
				}
			}
		})
		return (				
			<div style={ styles.fewestGuessDisplay }>Fewest Guess: <span style={ styles.guessCount }>{this.state.fewestGuess}</span></div>
		);
	}
}

export default FewestGuess;





