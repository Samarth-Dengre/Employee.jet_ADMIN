const mongoose = require('mongoose');
const User=require('../models/user');

module.exports.users = [
    {
        name: "John Doe",
        designation: "CEO",
        empId: "1",
        level: 1,
        supervisor: null,
        address: "Bangalore",
        phnNo: "+91 1234567890",
        email: "johndoe@empjet.ac.in",
        joinedOn: new Date(),   
        releasedOn: null,
        password: "123456",
        avatar: "../uploads/users/avatars/avatar-1655900644429",
        projects: []
    },
    {
        name: "Jane Doe",
        designation: "Manager",
        empId: "2",
        level: 2,
        supervisor: null,
        address: "Bangalore",
        phnNo: "+91 932193291",
        email: "janedoe@empjet.ac.in",
        joinedOn: new Date(),
        releasedOn: null,
        password: "123456",
        avatar: "../uploads/users/avatars/avatar-1655900644429",
        projects: []
    },
    {
        name: "Hugh Doe",
        designation: "Manager",
        empId: "3",
        level: 2,
        supervisor: null,
        address: "Bangalore",
        phnNo: "+91 928383212",
        email: "hughdoe@empjet.ac.in",
        joinedOn: new Date(),
        releasedOn: null,
        password: "123456",
        avatar: "../uploads/users/avatars/avatar-1655900729893",
        projects: []
    },
    {
        name: "Jack Doe",
        designation: "Employee",
        empId: "4",
        level: 3,
        supervisor: null,
        address: "Bangalore",
        phnNo: "+91 928383212",
        email: "jackdoe@empjet.ac.in",
        joinedOn: new Date(),
        releasedOn: null,
        password: "123456",
        avatar: "../uploads/users/avatars/avatar-1655900644429",
        projects: []
    },
    {
        name: "Jill Doe",
        designation: "Employee",
        empId: "5",
        level: 3,
        supervisor: null,
        address: "Bangalore",
        phnNo: "+91 928383212",
        email: "jilldoe@empjet.ac.in",
        joinedOn: new Date(),
        releasedOn: null,
        password: "123456",
        avatar: "../uploads/users/avatars/avatar-1655900644429",
        projects: []
    },
    {
        name: "Samarth Doe",
        designation: "Employee",
        empId: "6",
        level: 3,
        supervisor: null,
        address: "Bangalore",
        phnNo: "+91 928383212",
        email: "samdoe@empjet.ac.in",
        joinedOn: new Date(),
        releasedOn: null,
        password: "123456",
        avatar: "../uploads/users/avatars/avatar-1655900644429",
        projects: []
    },
]

module.exports.todoDataPvt = [
    {
        task: "Task 1",
        endDate: new Date(),
        deadline: new Date(),
    },
    {
        task: "Task 2",
        endDate: new Date(),
        deadline: new Date(),
    },
    {
        task: "Task 3",
        endDate: new Date(),
        deadline: new Date(),
    }
]

const getId = async(empId) => {
    const res = await User.findOne({ empId: empId });
    return res._id;
  }
  
module.exports.returnProjects = async () => {
    return [
        {
            name: "Project 1",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita maxime mollitia eos neque possimus aspernatur reprehenderit vero harum suscipit nesciunt, blanditiis, similique, quia veniam consectetur! Velit culpa corrupti nihil!",
            supervisor: await getId("2"),
            team: [
                await getId("4"),
                await getId("5"),
                await getId("2")],
        }
    ]
}


module.exports.admins=[
    {
        name: "Vaibhav Doe",
        empId: "0",
        address: "Bangalore",
        phnNo: "+91 928383212",
        email: "vjdoe@empjet.ac.in",
        joinedOn: new Date(),
        password: "123456",
        avatar: "../uploads/users/avatars/avatar-1655900644429",
    },
]

module.exports.questions = [
    {
        question: "Rate the behavior of the manager",
        type : "rating", 
    },
    {
        question: "Rate the team coordination",
        type : "rating", 
    },
    {
        question: "Rate the work distribution among the team",
        type : "rating", 
    },
    {
        question: "Rate the ease of communication with the team and manager",
        type : "rating", 
    },
    {
        question: "Was the deadline sufficient?",
        type: "binary"
    }
]

module.exports.feedback = 
    {
    name: "General Information about Users",
        description: "This feedback is used to record and analyze the general information about our employees' performance",
    }


module.exports.responses = async () => {
    return [
        {
            byEmpObjId: await getId("5"),
            response:"5"
        },
        {
            byEmpObjId: await getId("5"),
            response:"4"
        },
        {
            byEmpObjId: await getId("5"),
            response:"3"
        },
        {
            byEmpObjId: await getId("5"),
            response:"3"
        },
        {
            byEmpObjId: await getId("5"),
            response:"yes"
        }
    ]
}
