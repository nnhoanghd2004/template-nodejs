/** @format */
import configServer from './configs/server';
import initWebRoutes from './routes';

const express = require('express');
import connectDB from './configs/database/index';
const app = express();
const port = 4000;

// config view engine
configServer(app);

// init routes
initWebRoutes(app);

connectDB();

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
