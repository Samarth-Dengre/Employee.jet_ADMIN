const passport = require(`passport`);
const router = require('express').Router();
const feedbackController = require(`../controller/feedbackController`);

router.get('/',feedbackController.renderFeedback);

module.exports = router;