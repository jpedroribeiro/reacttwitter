import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="container-fluid">
			<Link to="/">List of tweets</Link> | <Link to="/tweet">Tweet</Link>
		</footer>
	);
}

export default Footer;
