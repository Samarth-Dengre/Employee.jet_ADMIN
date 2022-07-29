const passport = require(`passport`);
const router = require('express').Router();
const feedbackController = require(`../controller/feedbackController`);

router.get('/', feedbackController.viewAllFeedbacks);  //route to view all feedbacks
router.get('/create', feedbackController.renderCreateFeedback);    //route to render create feedback page
router.post('/create', feedbackController.createFeedback);    //route to create feedback
router.get('/:id', feedbackController.showFeedback);    //route to show particular feedback

module.exports = router;