//Dependencies
const router = require('express').Router();

const userRoutes = require('./api/');
const postRoutes = require('./home-routes/');
const commentRoutes = require('./dashboard-routes');

//Create modular route handlers
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports= router;
