import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import List from './List';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tweets: []
		};
	}

	async componentDidMount() {
		let response = await fetch('http://localhost:5000/api');
		let data = await response.json();

		this.setState(data);
	}

	addTweet(tweet) {
		this.setState({
			tweets: [...this.state.tweets, tweet]
		});
	}

	submitForm = event => {
		event.preventDefault();

		let tuite = {
			id: this.state.tweets.length,
			user: event.target.elements[0].value,
			message: event.target.elements[1].value,
			date: Date.now()
		};

		this.addTweet(tuite);
	};

	render() {
		return [
			<Header key="header" />,
			<Switch key="router">
				<Route
					exact
					path="/"
					component={() => <List key="list" tweets={this.state.tweets} />}
				/>
				<Route
					path="/tweet"
					component={() => <Form key="form" submitForm={this.submitForm} />}
				/>
			</Switch>,
			<Footer key="footer" />
		];
	}
}

export default App;
