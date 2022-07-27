const passport = require(`passport`);
const router = require('express').Router();
const adminController = require(`../controller/adminController`);

// Logging in admin
router.post(`/login` ,  passport.authenticate( `local` , {
    failureRedirect: `/`
}) , adminController.login);

// Admin logout
router.get(`/logout` , adminController.logout);

module.exports = router;