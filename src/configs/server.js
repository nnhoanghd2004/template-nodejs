/** @format */
const morgan = require('morgan');
const express = require('express');
const methodOverride = require('method-override');

const configServer = (app) => {
	// config static file
	app.use(express.static('./src/public'));
	// app.use(morgan('combined'));

	app.use(methodOverride('_method'));

	// config view engine
	app.set('view engine', 'ejs');
	app.set('views', './src/views/pages');
	app.use(express.urlencoded({ extended: true }));
};

export default configServer;
