import React, {component} from 'react';
import EnterGuess from '../containers/enterGuess';
import HotOrCold from '../containers/HotOrCold';
//import {createStore} from 'redux';
import store from '../store';

/*
store.subscribe(() => {
	console.log("subscribed store: ", store.getState());
})
*/




const App = () => {
	const abc = "some string 2";
	return 	<div>
				<HotOrCold />
				<EnterGuess />
				{abc}
			</div>;
}






export default App;

