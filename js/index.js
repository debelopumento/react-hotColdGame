require ('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/app';


//const store = createStore(allReducers);


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
    	//<Provider store={store}>
    		<App />
    	//</Provider>
    	, document.getElementById('app'))
);