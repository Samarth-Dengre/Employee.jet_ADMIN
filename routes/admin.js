const passport = require(`passport`);
const router = require('express').Router();
const adminController = require(`../controller/adminController`);

// Logging in admin
router.post(`/login` ,  passport.authenticate( `local` , {
    failureRedirect: `/`
}) , adminController.login);

// Admin logout
router.get(`/logout`, passport.checkAuthentication , adminController.logout);

// Admin tab
router.get(`/`, passport.checkAuthentication , adminController.adminTab);


module.exports = router;