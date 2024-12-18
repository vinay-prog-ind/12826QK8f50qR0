const mongoose = require("mongoose");
const User = require("../model/userModel");

// const util = require("util");   
const {promisify} = require("util");

const jwt = require("jsonwebtoken");

const getToken = async id => {
    return await jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
}

exports.getAllUser = async (req, res, next) => {
    const users = await User.find().select("+password");

    res.status(200).json({
        status: "success",
        users
    })

};

exports.signup = async (req,  res, next) => {

    try {
    
        const newUsr = await User.create({
            user: req.body.user,
            password: req.body.password,
            confirm: req.body.confirm

        });

        // const token = jwt.sign({id: newUsr._id},process.env.JWT_SECRET, {
        //     expiresIn: process.env.JWT_EXPIRE
        // });

        const token = getToken(newUsr._id);

        res.status(201).json({
            status: 'success',
            token,
            data: newUsr,
        });
    }
    catch (err) {
        res.status(400).json({
            status: "Error",
            error: err.message
        });
    }

    next();

}

exports.login = async (req, res, next) => {
    try {
        const {user, password} = req.body;

        // 1 if user / password exists 
        if(!user || !password) {
            return next(new Error("verification failed"));
        }

        // 2 if user exists and password is correct

        const userAvl = await User.findOne({user}).select("+password");
        
        if(!userAvl ||  !(await userAvl.correctPassword(password, userAvl.password)))
        {
            res.status(500).json({
                status: "fail",
                error: "Invalid user or password!",
            })
            return next();
        }
        

        // 3 if everything is working then send response to client

        const token = await getToken(userAvl._id);

        res.status(200).json({
            status: "success",
            token
        });
    }
    catch (err) {
        res.status(400).json({
            status: "Fail",
            error: err.message
        });
    }
    next();
};


exports.protect = async (req, res, next) => {
    try {
        let token;
        if(req.headers && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization?.split(' ')[1];
        }
        
        if(!token) {
            return res.status(400).json({
                status: "fail",
                error: "Unauthorized access, no token specified."
            })
        }

        const decoded =  await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        
        if(!decoded) {
            return res.status(400).json({
                status: "fail",
                error: "Unauthorized access, Please login to continue."
            })
        }

        // checking if the user exists in between the login session
        
        const freshUser = await User.findById(decoded.id);
        

        req.user = freshUser;
        // res.status(200).json({
        //     status: "success",
        //     decoded
        // });
        next();
    }
    catch (err) {
        return res.status(401).json({
            status: "Error",
            error: err.message
        });
        
    }
};