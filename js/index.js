require ('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import store from './store';
import App from './containers/app';

ReactDOM.render(
	<Provider store={store}>
    		<App />
	</Provider>
	, document.getElementById('app'))

	