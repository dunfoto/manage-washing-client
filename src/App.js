import React, { Component } from "react";
// import "./App.css";
import ToDo from "./components/todo";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

export default class App extends Component {
	render() {
		return (
			<ReduxProvider store={reduxStore}>
				<div className="App">
					<ToDo />
				</div>
			</ReduxProvider>
		);
	}
}