const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization, Content-Length, X-Requested-With'
	);

	res.json({
		tweets: [
			{
				id: 0,
				user: 'jpedroribeiro',
				message: 'this is a tweet',
				date: Date.now()
			}
		]
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
