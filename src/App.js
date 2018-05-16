import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ConnectedForm from './ConnectedForm';
import ConnectedList from './ConnectedList';
import './App.css';

class App extends Component {
	// async componentDidMount() {
	// 	let response = await fetch('http://localhost:5000/api');
	// 	let data = await response.json();

	// 	this.setState(data);
	// }

	render() {
		return [
			<Header key="header" />,
			<Switch key="router">
				<Route exact path="/" component={() => <ConnectedList key="list" />} />
				<Route path="/tweet" component={() => <ConnectedForm key="form" />} />
			</Switch>,
			<Footer key="footer" />
		];
	}
}

export default App;
