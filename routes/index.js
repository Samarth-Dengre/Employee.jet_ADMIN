const passport = require('passport');
const router = require('express').Router();
const homeController = require(`../controller/homeController`);

router.get(`/` , homeController.home)
router.use('/admin', require('./admin'));
router.use('/feedback', require('./feedback'));
module.exports = router;