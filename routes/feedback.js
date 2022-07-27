const passport = require(`passport`);
const router = require('express').Router();
const feedbackController = require(`../controller/feedbackController`);

router.get('/', feedbackController.renderFeedback);
router.get('/viewAll', feedbackController.viewAllFeedbacks);
router.get('/create', feedbackController.renderCreateFeedback);
router.get('/:id', feedbackController.showFeedback);

module.exports = router;