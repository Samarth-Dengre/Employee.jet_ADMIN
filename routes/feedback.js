const passport = require(`passport`);
const router = require('express').Router();
const feedbackController = require(`../controller/feedbackController`);

router.get('/', passport.checkAuthentication , feedbackController.viewAllFeedbacks);  //route to view all feedbacks
router.get('/create',passport.checkAuthentication , feedbackController.renderCreateFeedback);    //route to render create feedback page
router.post('/create', passport.checkAuthentication ,feedbackController.createFeedback);    //route to create feedback
router.get('/:id', passport.checkAuthentication ,feedbackController.showFeedback);    //route to show particular feedback

// Send feedback form to members of a particular project
router.get(`/sendFeedback/:id`, passport.checkAuthentication , feedbackController.sendFeedback);

module.exports = router;