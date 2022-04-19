require('../models/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const User = mongoose.model('User');

module.exports.loginUser =  async (req,res,next) => {
    try{
        let user = await User.findOne({  email: req.body.email.toLowerCase() });
        if(!user) {
             return res.status(400).json({ type: "Not Found", msg: "Invalid  Email Or Password"});
        }
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if(!validPassword) return res.status(400).json({ type: "Not Found", msg: "Invalid Email Or Password" });

            if(user.activeStatus == false) return res.status(400).json({ type: "Not Found", msg: "Account Disabled ! Contact Admin" });
            const token = jwt.sign({ _id: user._id ,status: user.activeStatus,email:user.email,name:user.firstName,lastName:user.lastName}, process.env.JWT_PRIVATE_KEY ,{ expiresIn : '2h'});
            const refreshToken = jwt.sign({ _id: user._id  }, process.env.REFRESH_TOKEN ,{ expiresIn : '1y'});
            res.status(200).json({success : true, token: token, refreshToken : refreshToken})
    
        }
    catch(ex){
        next(ex);
    }
}

module.exports.createUser =  async (req,res,next) => {
    try{
    let user = await User.findOne({userLoginId: req.body.userLoginId});    
 
    if(user) return res.status(400).json({ type: "Invalid", msg: "User is already registered with this Email Or UserId."});
    
    user = new User(_.pick(req.body, ['firstName','lastName','email','password','activeStatus']));
    const salt = await bcrypt.genSalt(10);
    
    await user.save(async(err, doc) => {
        if(!err) {
            const token = jwt.sign({ _id: user._id ,userRole: user.userRole,status: user.activeStatus,name:user.firstName }, process.env.JWT_PRIVATE_KEY,{ expiresIn : '2h'});
            const refreshToken = jwt.sign({ _id: user._id ,userRole: user.userRole }, process.env.REFRESH_TOKEN ,{ expiresIn : '1y'});
            res.status(200).header('x-auth-token',token).send( [_.pick(user, ['_id','firstName','lastName','userLoginId','email','userRole','status']), {'success':true}]);
        }
        else {
            return next(err); 
        }
    });
    }
    catch(ex){
        next(ex);
    }
}

module.exports.getAllUsers =  async (req,res,next) => {
    try{
    let user = await User.find({}, {"password":0}).sort({firstName:1});
    if(!user || user.length === 0)
    return res.status(400).json({ type: "Not Found", msg: "Users Not Available."});

    return res.status(200).json({success : true, users : user});
    }
    catch(ex){
        next(ex);
    }
}

module.exports.logout =  async (req,res,next) => {
    return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out" });
}
