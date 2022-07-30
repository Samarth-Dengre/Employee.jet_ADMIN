const User = require('../models/user');
const Crypto = require('crypto');
const Project = require('../models/project');
const Task = require('../models/task');
const ToDo = require('../models/toDo');


// Rendering employees page
module.exports.renderEmployees = async (req, res) => {
    const user = await User.find({}).sort(`-joinedOn`);
    return res.render('employees/employee', {
        layout: 'blank_layout',
        title: 'Employees',
        onPage: 'employee',
        users: user
    });
}

// rendering add new employee page
module.exports.renderAddEmployeeForm = async (req, res) => {
    return res.render('employees/addNewEmployeeForm', {
        layout: 'blank_layout',
        title: 'Add Employee',
        onPage: 'employee'
    });
}

// Adding new employee
module.exports.addNewEmployee = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            designation: req.body.designation,
            empId: Crypto.randomBytes(2).toString('hex'),
            level: req.body.level,
            supervisor: null,
            address: req.body.address,
            phnNo: req.body.phnNo,
            email: req.body.email,
            joinedOn: req.body.joinedOn,
            releasedOn: req.body.releasedOn,
            password: Crypto.randomBytes(2).toString('hex'),
            avatar: "../uploads/users/avatars/avatar-1655900644429",
            projects: []
        });
        await user.save();
        return res.redirect('/employees');

    } catch (error) {
        console.log("Error in adding new employee: ", error);
        return res.redirect('/employees');
    }
}

// removing employee from organization
module.exports.remove = async (req, res) => {
}