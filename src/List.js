import React, { Component } from 'react';
import PropTypes from 'prop-types';

function timeConverter(UNIX_timestamp) {
	var a = new Date(UNIX_timestamp);
	var months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time =
		date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
	return time;
}

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
