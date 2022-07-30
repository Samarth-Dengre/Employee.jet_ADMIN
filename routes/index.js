const passport = require('passport');
const router = require('express').Router();
const homeController = require(`../controller/homeController`);

router.get(`/` , homeController.home)
router.use('/admin', require('./admin'));
router.use('/feedback', require('./feedback'));

// Routing to employees.js
router.use('/employees', require('./employees'));

// Routing to requests
router.use('/requests', require('./requests'));
module.exports = router;