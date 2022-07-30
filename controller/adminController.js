const Admin = require(`../models/admin`);
const Project = require(`../models/project`);
// Admin Login
module.exports.login = async (req, res) => {
    return res.redirect('back');
}

// Admin logout
module.exports.logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            console.log(`Error in logging out`);
        }
        return res.redirect(`/`);
    });
}

// Rendering Admin tab
module.exports.adminTab = async (req, res) => {
    try {
        const projects = await Project.find({});
    return res.render('admin/admin' , {
        layout: 'blank_layout',
        projects: projects,
        title: 'Admin | Admin Panel',
        onPage: `Admin`,
    });
    } catch (error) {
        console.log("Error in rendering admin tab: ", error);
        return res.redirect('/');
    }
}