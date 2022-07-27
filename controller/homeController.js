const User = require('../models/user');
const ToDo = require('../models/toDo');
const Task = require('../models/task');
const Admin = require(`../models/admin`);

module.exports.home = async (req , res)=>{
    if(!req.user){
        return res.render('landingPage' , {
            layout: 'blank_layout',
            title: 'Employee.Jet | Admin'
        });
    }

    
    //populate the user object with the toDoList and tasks
    const admin = await Admin.findById(req.user._id);
    return res.render('home', {
        layout: 'blank_layout',
        title: 'Employee.Jet | ADMIN | Home'
        // tasks: (user.pvtToDoList == null) ? null : user.pvtToDoList.tasks,
        // onPage: 'dashboard'
    });
}

