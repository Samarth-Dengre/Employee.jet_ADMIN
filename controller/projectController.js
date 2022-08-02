const User = require('../models/user');
const ToDo = require('../models/toDo');
const Task = require('../models/task');
const Admin = require(`../models/admin`);
const Feedback = require('../models/feedback');
const Question = require('../models/question');
const Response = require('../models/response');
const Project = require('../models/project');

module.exports.viewAllProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
    return res.render('project/viewAll' , {
        layout: 'blank_layout',
        projects: projects,
        title: 'Admin | Projects',
        onPage: `projects`,
    });
    } catch (error) {
        console.log("Error in rendering admin tab: ", error);
        return res.redirect('/');
    }
}