/** @format */

import express from 'express';
const router = express.Router();

import {
	renderAdminPage,
	renderPostCreatePage,
	renderNotiCreatePostPage,
	renderNotiDeletePostPage,
	renderAdminLoginPage,
	renderPostUpdatePage,
	createPost,
	updatePost,
	deletePost,
} from '../controllers/admin';

router.delete('/post/:title', deletePost);
router.get('/post/noti-delete/:title', renderNotiDeletePostPage);
router.get('/post', renderPostCreatePage);
router.get('/login', renderAdminLoginPage);
router.post('/post/store', createPost);
router.get('/post/noti-post', renderNotiCreatePostPage);
router.put('/post/:title', updatePost);
router.get('/post/:title', renderPostUpdatePage);

router.get('/', renderAdminPage);

export default router;
