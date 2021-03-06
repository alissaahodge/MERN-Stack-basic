import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from "../models/user.js";
import mongoose from "mongoose";

export const signin = async (req, res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if (!existingUser) return res.status(404).json({message: "User Doesn't Exist"});
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials"});
        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id
        }, process.env.CLIENT_SECRET, {expiresIn: "1h"});
        return res.status(200).json({result: existingUser, token})
    } catch (e) {
        res.status(500).json({message: "Something Went Wrong"});
    }

};

export const signup = async (req, res) => {

    const {email, password, confirmPassword, firstName, lastName} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message: "User Already Exists"});
        if (!validateEmail(email)) return res.status(400).json({message: "Invalid Email"});
        if (password !== confirmPassword) return res.status(400).json({message: "Passwords Don't Match"});
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({email, password: hashedPassword, firstName, lastName});
        const token = jwt.sign({email: result.email, id: result._id}, process.env.CLIENT_SECRET, {expiresIn: "1h"});
        return res.status(200).json({result, token})

    } catch (e) {
        res.status(500).json({message: "Something Went Wrong"});

    }

};


export const updateAccount = async (req, res) => {
    const {id} = req.params;
    const account = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No account with that id');
    const updatedAccount = await User.findByIdAndUpdate(id, {...account, id}, {new: true});
    res.json(updatedAccount);
};

export const updateAccountPassword = async (req, res) => {
    const {id} = req.params;
    const {password, confirmPassword} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No account with that id');
    if (password !== confirmPassword) return res.status(400).json({message: "Passwords Don't Match"});
    const hashedPassword = await bcrypt.hash(password, 12);
    const updatedAccount = await User.findByIdAndUpdate(id, {password: hashedPassword, id}, {new: true});
    res.json(updatedAccount);
};


// Check if E-mail is Valid or not
const validateEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

