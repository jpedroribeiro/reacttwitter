import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ConnectedForm from './ConnectedForm';
import ConnectedList from './ConnectedList';
import { addTuite } from './actions';
import store from './store';
import './App.css';

async function loadTweets() {
	let response = await fetch('http://localhost:5000/api');
	let data = await response.json();

	return data;
}

class App extends Component {
	componentDidMount() {
		// Load up tweets from server/API
		loadTweets().then(data => {
			data.tweets.map(tweet => {
				store.dispatch(addTuite(tweet));
			});
		});
	}

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
