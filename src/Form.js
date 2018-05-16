import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
	constructor(props) {
		super();

		this.state = {
			user: '',
			message: '',
			date: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
	}

	handleUserChange = event => {
		this.setState({
			...this.state,
			user: event.target.value
		});
	};

	handleMessageChange = event => {
		this.setState({
			...this.state,
			message: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		if (event.target.elements[0].value && event.target.elements[1].value) {
			this.props.addTuite({ ...this.state, date: Date.now() });

			this.setState({
				user: '',
				message: ''
			});
		}
	};

	render() {
		return (
			<section className="container-fluid">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="user"
						placeholder="user"
						onChange={this.handleUserChange}
						value={this.state.user}
					/>
					<input
						type="text"
						name="message"
						placeholder="message"
						onChange={this.handleMessageChange}
						value={this.state.message}
					/>
					<button>✅</button>
				</form>
			</section>
		);
	}
}

Form.propTypes = {
	addTuite: PropTypes.func
};

export default Form;
