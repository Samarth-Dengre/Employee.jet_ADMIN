const passport = require(`passport`);
const router = require('express').Router();
const adminController = require(`../controller/adminController`);

// Logging in admin
router.post(`/login` ,  passport.authenticate( `local` , {
    failureRedirect: `/`
}) , adminController.login);

module.exports = router;