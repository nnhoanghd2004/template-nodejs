/** @format */

import post from '../models/post';

const renderAdminLoginPage = (req, res) => {
	return res.render('login.ejs');
};

const renderAdminPage = async (req, res) => {
	const data = await getAllPosts();
	return res.render('admin.ejs', { data });
};

const renderPostCreatePage = (req, res) => {
	const data = {};
	return res.render('post.ejs', { data });
};

const renderPostUpdatePage = async (req, res) => {
	const data = await getPostByTitle(req.params.title);
	return res.render('post.ejs', { data });
};

const renderNotiCreatePostPage = (req, res) => {
	const noti = req.query;
	// return res.send('test');
	return res.render('noti-post.ejs', { noti });
};

const renderNotiDeletePostPage = (req, res) => {
	const noti = req.params;
	return res.render('noti-delete.ejs', { noti });
};

const createPost = async (req, res, next) => {
	const data = new post(req.body);
	await data
		.save()
		.then(() =>
			res.redirect('/admin/post/noti-post/?action=create&data=success')
		)
		.catch((e) => {
			res.redirect('/admin/post/noti-post/?action=create&data=failure');
		});
	// res.send('create successfullly');
};

const updatePost = async (req, res) => {
	await post
		.updateOne({ title: req.params.title }, req.body)
		.then(() =>
			res.redirect('/admin/post/noti-post/?action=update&data=success')
		)
		.catch((e) =>
			res.redirect('/admin/post/noti-post/?action=update&data=failure')
		);
};

const deletePost = async (req, res) => {
	await post
		.deleteOne({ title: req.params.title })
		.exec()
		.then(() =>
			res.redirect('/admin/post/noti-post/?action=delete&data=success')
		)
		.catch((e) =>
			res.redirect('/admin/post/noti-post/?action=delete&data=failure')
		);
};

const getAllPosts = async () => {
	const data = await post.find({}).exec();
	return data;
};

const getPostByTitle = async (title) => {
	return await post
		.findOne({ title: title }, 'title desc createdAt updatedAt')
		.exec();
};

export {
	renderAdminLoginPage,
	renderAdminPage,
	renderPostCreatePage,
	renderPostUpdatePage,
	renderNotiCreatePostPage,
	renderNotiDeletePostPage,
	createPost,
	updatePost,
	deletePost,
};
