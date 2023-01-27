const User = require("../models/User");
const bcrypt = require('bcrypt')
const shortid = require('shortid')
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {
    const { firstName, lastName, email, department, password, role } = req.body

    try {
        // Validate fields
        if(!firstName || !lastName || !email || !password || !role) {
            return res.status(403).json({ code: 200, message: "Enter all fields!" })
        }

        // Validate if user is already registered
        const isUser = await User.findOne({ where: { email }})
        if(isUser){
            return res.status(403).json({ code: 403, message: "User already exists" })
        }

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                const user = {
                    userId: shortid.generate(),
                    firstName,
                    lastName,
                    email,
                    password: hash,
                    department,
                    role
                };
                const createdUser = await User.create(user)
                res.status(201).json({
                    code: 201,
                    messsage: "Operation successful",
                    data: createdUser
                })
            })
        })
    }
    catch (error) {
        res.status(500).json({
            code: 500,
            message: "Something went wrong",
            error
        })
    }
}

exports.loginUser = async(req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email }});
    if(user){
        const passwordValid = await bcrypt.compare(password, user.password);
        if(passwordValid){
            token = jwt.sign({ userId: user.userId, role: user.role }, process.env.SECRET_KEY);
            res.status(200).json({
                code: 200,
                message: "Operation successful",
                data: {
                    userId: user.userId,
                    token
                }
            });
        } else {
            res.status(400).json({ code: 400, message: "Password incorrect" });
        }
  
    }else{
        res.status(404).json({ code: 404, message: "User not found" });
    }
}

exports.getUserInfo = (req, res) => {
    User.findOne({ where: {
        userId: req.user.userId
    } })
    .then(user => { 
        const { id, userId, firstName, lastName, email, role, department, createdAt } = user
        res.status(200).json({
            code: 200,
            messagae: "Operation successful",
            data: {
                id,
                userId,
                firstName,
                lastName,
                email,
                role,
                department,
                dateCreated: createdAt
            }
        })
    })
    .catch(error => {
        res.status(500).send({ code: 500, message: 'An error occured', error })
    })
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