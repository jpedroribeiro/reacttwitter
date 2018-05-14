import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Form(props) {
	return (
		<section className="container-fluid">
			<form onSubmit={props.submitForm}>
				<input type="text" name="user" placeholder="user" />
				<input type="text" name="message" placeholder="message" />
				<button>✅</button>
			</form>
		</section>
	);
}

Form.propTypes = {
	submitForm: PropTypes.func
};

export default Form;
