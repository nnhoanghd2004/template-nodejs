/** @format */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Post = new Schema(
	{
		title: { type: String, require: true, unique: true },
		desc: { type: String, require: true },
	},
	{ timestamps: true }
);

export default mongoose.model('Post', Post);
