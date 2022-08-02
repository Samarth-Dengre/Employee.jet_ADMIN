const User = require('../models/user');
const ToDo = require('../models/toDo');
const Task = require('../models/task');
const Admin = require(`../models/admin`);
const Feedback = require('../models/feedback');
const Question = require('../models/question');
const Response = require('../models/response');


module.exports.viewAllFeedbacks = async (req , res)=>{
    if(!req.user){
        return res.render('landingPage' , {
            layout: 'blank_layout',
            title: 'Employee.Jet | Admin'
        });
    }
    //populate the feedback page
    const admin = await Admin.findById(req.user._id);
    const feedbacks = await Feedback.find({}).populate({ path: 'questions', populate: { path: 'responses',}});
    //console.log(feedbacks);
    return res.render('feedback/viewAll', {
        layout: 'blank_layout',
        title: 'View Feedbacks',
        onPage: 'feedback',
        admin: admin,
        feedbacks: feedbacks
    });
}


module.exports.showFeedback = async (req, res) => {
    if(!req.user){
        return res.render('landingPage' , {
            layout: 'blank_layout',
            title: 'Employee.Jet | Admin'
        });
    }
    const feedback = await Feedback.findById(req.params.id).populate({ path: 'questions', populate: { path: 'responses', populate: { path: 'byEmpObjId' } } });
    let averages=[]
    for (let i = 0; i < feedback.questions.length; i++) {
        if (feedback.questions[i].responses.length > 0) {
            let sum = 0;
            let yes = 0;
            for (let j = 0; j < feedback.questions[i].responses.length; j++) {
                //console.log(feedback.questions[i].responses[j].response);
                if (feedback.questions[i].type === 'rating')
                    sum += parseInt(feedback.questions[i].responses[j].response);
                else if(feedback.questions[i].responses[j].response==='yes') 
                    yes++;
                
            } 
            if (feedback.questions[i].type == 'rating')
                averages.push(sum / feedback.questions[i].responses.length);
            else
                averages.push((yes / feedback.questions[i].responses.length) * 100);
        }
        else
            averages.push(0);
    }
    //console.log(feedback);
    //console.log(averages);
    const admin = await Admin.findById(req.user._id);
    return res.render('feedback/show', {
        layout: 'blank_layout',
        title: 'View Feedback',
        onPage: 'feedback',
        admin: admin,
        feedback: feedback,
        averages:averages
    });
}

module.exports.renderCreateFeedback = async (req, res) => {
    if(!req.user){
        return res.render('landingPage' , {
            layout: 'blank_layout',
            title: 'Employee.Jet | Admin'
        });
    }
    const admin = await Admin.findById(req.user._id);
    return res.render('feedback/create', {
        layout: 'blank_layout',
        title: 'Create Feedback',
        onPage: 'feedback',
        admin: admin
    });
}


module.exports.createFeedback = async (req, res) => {
    const feedback = new Feedback({
        name: req.body.title,
        description: req.body.description,
    });
    // console.log(req.body);
    // let questions = req.body.questions;
    // console.log(questions.length);
    for (let i = 0; i < req.body.questions.length; i++){
        if (req.body.questions[i] && req.body.types[i]) {
            const question = new Question({
                question: req.body.questions[i],
                type: req.body.types[i]
            });
            const newQuestion = await question.save();
            //console.log(newQuestion);
            feedback.questions.push(newQuestion._id);
        }
    }
    const newFeedback = await feedback.save();
    res.redirect(`/feedback/${newFeedback._id}`);
};


// Sending feedback form
module.exports.sendFeedback = async (req, res) => {
}