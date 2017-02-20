require ('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import store from './store';
import App from './components/app';



document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
    	<Provider store={store}>
    		<div>
	    		<h1>HOT or COLD</h1>
	    		<App />
    		</div>
    	</Provider>
    	, document.getElementById('app'))
);