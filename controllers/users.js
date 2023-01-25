const User = require("../models/User");

exports.createUser = (req, res) => {
    User.create({
        
    })
    .then(user => {
        console.log(user)
    })
    .catch(error => {
        console.log(error)
    })
}

exports.loginUser = (req, res) => {

}

exports.getUserInfo = (req, res) => {

}

// AUTHENTICATE USER
exports.isAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    // Verify Token
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}