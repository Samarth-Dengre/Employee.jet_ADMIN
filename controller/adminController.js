const Admin = require(`../models/admin`);

// Admin Login
module.exports.login = async (req, res) => {

    const { empId, password } = req.body;
    const user = await Admin.findOne({ empId: empId });
    if (!user) {
        return res.status(400).send("User not found");
    }
    if (user.password !== password) {
        return res.status(400).send("Incorrect password");
    }
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