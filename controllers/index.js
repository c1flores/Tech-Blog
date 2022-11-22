//Dependencies
const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

//Create modular route handlers
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports= router;
