/** @format */

import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/blog-dev');
		console.log('Connect Database Successfully!!!');
	} catch (error) {
		console.log('Connect Database Failure');
	}
};

export default connectDB;
