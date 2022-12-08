'use strict';

const express = require('C:/Users/chris/AppData/Roaming/npm/node_modules/express'); // was not loading as just 'express'
const app = express();

// define endpoint for exercise 1 here
// making GET endpoint at '/math/circle/x', with x as a simple variable
app.get('/math/circle/:r', function (req, res) {
	res.type('JSON');
	res.send({"area": req.params['r']*Math.PI*req.params['r'], "circumference": 2*req.params['r']*Math.PI});
});

// define endpoint for exercise 2 here
app.get('/hello/name/', function (req, res) {
	
	// if NOT a firstname and NOT a lastname
	if (!req.query['firstName'] && !req.query['lastName'])
	{
		res.status(400);
		res.send('Missing Required GET parameters: first, last');
	}
	else if (!req.query['firstName'])	// if NOT a first name
	{
		res.status(400);
		res.send('Missing Required GET parameters: first');
	}
	else if (!req.query['lastName'])	// if NOT a last name
	{
		res.status(400);
		res.send('Missing Required GET parameters: last');
	}
	// if it got here it MUST have a firstName and lastName query - other queries all ignored
	res.type('text/plain');
	res.send('Hello '+req.query['firstName']+' '+req.query['lastName']);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);