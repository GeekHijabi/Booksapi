const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// To set up the app
const app = express();

// For logging request to the console
app.use(logger('dev'));

//Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// default route for landing
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the land of awesomeness'
}));

module.exports = app;
