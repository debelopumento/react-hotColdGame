
import React, {component} from 'react';
require ('babel-polyfill');
import reactCSS from 'reactcss';


export default class GameDoc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameDocDisplay: false
		};
		this.hideGameDoc = this.hideGameDoc.bind(this);
		this.showGameDoc = this.showGameDoc.bind(this);
	}
	hideGameDoc(event) {
		event.preventDefault();
		this.setState({gameDocDisplay: false});
	}

	showGameDoc(event) {
		event.preventDefault();
		this.setState({gameDocDisplay: true});

	}
	render() {
		const { handleClick } = this.props;
		const styles = reactCSS({
			'default': {
				gameDoc: {
					background: 'rgba(1, 0, 0, 0.85)',
					position: 'absolute',
					marginLeft: '10px',
					marginRight: '10px',
					padding: '5px',
					float: 'center',
					flex: '1',
				},
				ul: {
					listStyleType: 'none',
				},
				gameDocButton: {
					background: 'red',
					margin: '0 auto',
					padding: '5px',
					border: '0',
				},
				left: {
					background: 'rgba(0, 0, 0, 0)',
					color: 'white',
					border: '0px',
					float: 'left',
				}
			}
		})		
		if (this.state.gameDocDisplay === true) {
			return (
				<div style={ styles.gameDoc }>
					<h3>What do I do?</h3>
					<div>
						<p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
						<ul style={ styles.ul }>
							<li>1. I pick a random secret number between 1 to 100 and keep it hidden.</li>
							<li>2. You need to guess until you can find the hidden secret number.</li>
							<li>3. You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
						</ul>
						<p>So, Are you ready?</p>
						<input style={ styles.gameDocButton } type="submit" onClick={this.hideGameDoc} value="Got It!" />
					</div>

				</div>

			) 
		} 
			return (
				<div><input style={ styles.left } type="submit" value="WHAT?" onClick={this.showGameDoc} /></div>
			)
		
		
			
	}
}


