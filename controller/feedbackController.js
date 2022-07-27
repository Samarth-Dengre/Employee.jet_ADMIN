const User = require('../models/user');
const ToDo = require('../models/toDo');
const Task = require('../models/task');
const Admin = require(`../models/admin`);
const Feedback = require('../models/feedback');

module.exports.renderFeedback = async (req , res)=>{
    if(!req.user){
        return res.render('landingPage' , {
            layout: 'blank_layout',
            title: 'Employee.Jet | Admin'
        });
    }
    //populate the feedback page
    const admin = await Admin.findById(req.user._id);
    return res.render('feedback/feedback', {
        layout: 'blank_layout',
        title: 'Feedback',
        onPage: 'feedback',
    });
}


module.exports.viewAllFeedbacks = async (req , res)=>{
    if(!req.user){
        return res.render('landingPage' , {
            layout: 'blank_layout',
            title: 'Employee.Jet | Admin'
        });
    }
    //populate the feedback page
    const admin = await Admin.findById(req.user._id);
    const feedbacks = await Feedback.find({});
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
    const feedback = await Feedback.findById(req.params.id);
    const admin = await Admin.findById(req.user._id);
    return res.render('feedback/show', {
        layout: 'blank_layout',
        title: 'View Feedback',
        onPage: 'feedback',
        admin: admin,
        feedback: feedback
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