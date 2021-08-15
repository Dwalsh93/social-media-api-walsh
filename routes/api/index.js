const router = require('express').Router();
const UserRoutes = require('./user-routes');
const ThoughtsRoutes = require('./thoughts-routes');

router.use('/user', UserRoutes);
router.use('/thoughts', ThoughtsRoutes);

module.exports = router;
