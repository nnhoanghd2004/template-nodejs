/** @format */

import express from 'express';
const router = express.Router();

import { renderNewsPage } from '../controllers/news';

router.get('/:slug', renderNewsPage);
router.get('/', renderNewsPage);

export default router;
