import React, {component} from 'react';
//import EnterGuess from '.components/enterGuess';
import EnterGuess from '../containers/enterGuess';
import HotOrCold from '../containers/HotOrCold';


const App = () => (
	<div>
		<HotOrCold />
		<EnterGuess />
	</div>
);

export default App;