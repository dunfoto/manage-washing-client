import React, { Component } from "react";
import Router from './routers';
import { Provider } from "react-redux";
import { Route } from 'react-router-dom';
import configureStore from "./store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

export default class App extends Component {
	render() {
		return (
			<Provider store={reduxStore}>
				<Route>
					<Router />
				</Route>
			</Provider>
		);
	}
}