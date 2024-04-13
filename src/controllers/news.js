/** @format */

import post from '../models/post';

const renderNewsPage = (req, res) => {
	return res.render('news.ejs');
};

export { renderNewsPage };
