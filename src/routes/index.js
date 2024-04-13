/** @format */

import siteRouter from './site';
import newsRouter from './news';
import adminRouter from './admin';

const initWebRoutes = (app) => {
	app.use('/admin', adminRouter);
	app.use('/news', newsRouter);
	app.use('/', siteRouter);
};

export default initWebRoutes;
