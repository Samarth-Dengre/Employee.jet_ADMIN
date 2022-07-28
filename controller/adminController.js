const Admin = require(`../models/admin`);

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