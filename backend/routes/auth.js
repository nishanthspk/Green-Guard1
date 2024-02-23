const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const router = express.Router();

const JWT_SECRET = 'hjbsdjfsbdjvbsdjh[wef]wef[asdfvnsd[ovjea]faesnfas';

require('../models/user');
const User = mongoose.model('UserDetail');
// SignUp route

router.post('/signup', async(req,res) => {
    try {
        const {email,password} = req.body;
        //hash password
        const hashedpassword = await bcrypt.hash(password,10);
        const exsistingUser = await User.findOne({email}).exec();
        if (exsistingUser){
            return res.status(409).json({ message: "User with the same email already exsists"});
        }
        const user = new User({email,password: hashedpassword});
        await user.save();
        res.status(201).json({message: "User created successfully", user});
    } 
    catch (error) {
        res.status(500).json({message: "Error creating user", error: error.message});
    }
});

//User Login
router.post('/login', async(req,res) => {
  const {email,password} = req.body;

  const user = await User.findOne({email});
  if (!user){
    return res.json({error: "User not found"});
  }
  if (await bcrypt.compare(password,user.password)){
    const token = jwt.sign({email: user.email}, JWT_SECRET,{
      expiresIn: '1h',
    });

    if (res.status(201)){
      return res.json({status:'ok', data: token});
    } else {
      return res.json({error: "error"});
    }
  }
  res.json({status:'error', error: 'Invalid Password'});
})
    
router.post("/userDetail", async(req,res) => {
  const {token} = req.body;
  try {
    const user = jwt.verify(token,JWT_SECRET,(err,res) => {
      if (err){
        return "Token Expired";
      }
      return res;
    });
    if (user == 'Token Expired'){
      return res.send({error: 'error', data: "Token Expired"});
    }
    const useremail = user.email;
    User.findOne({
      email: useremail
    }).then((data) => {
      res.send({status: 'ok', data: data});
    }).catch((error)=>{
      res.send({error: 'error', data: error});
    })
  } catch (error) {
  }
});

module.exports = router;