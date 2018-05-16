import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { timeConverter } from './utils';

function List(props) {
	return (
		<section className="container-fluid">
			{props.tweets.map(element => (
				<article key={element.id}>
					<strong>{element.user}</strong>:&nbsp;
					{element.message}
					<span>, on {timeConverter(element.date)}</span>
				</article>
			))}
		</section>
	);
}

List.propTypes = {
	tweets: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			user: PropTypes.string,
			message: PropTypes.string,
			date: PropTypes.date
		})
	)
};

export default List;
