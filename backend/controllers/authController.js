import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import userModel from '../models/userModel.js';

// Register User
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.json({success:false,message:'Missing Details'})
    } 
    try {
       const existingUser = await userModel.findOne({email});
        if(existingUser){
                return res.json({success:false,message:'User Already Exists'});
        }

       const hashPassword = await bcrypt.hash(password, 10);
       const user = new userModel({name,email,password:hashPassword});
       await userModel.save();

       const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'4d'});
       res.cookie('token',token,{
        httpOnly:true,
        secure: process.env.NODE_ENV === 'dev',
        sameSite:process.env.NODE_ENV === 'dev' ? 'none' : 'strict',
        MaxAge: 4*24*60*60*1000
    });
       
    } catch (error) {
        res.json({success:false,message:'Server Error'});
    }
};

// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

        if( !email || !password){
            return res.json({success:false,message:'Email and password are required'})
        } 
    try {
    
        const user = await User.findOne({ email });
        if (!user) return res.json({ message: 'Invalid email' });

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) return res.json({ message: 'Invalid password' });

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'4d'});
        res.cookie('token',token,{
        httpOnly:true,
        secure: process.env.NODE_ENV === 'dev',
        sameSite:process.env.NODE_ENV === 'dev' ? 'none' : 'strict',
        MaxAge: 4*24*60*60*1000
    });
       
    } catch (error) {
        res.json({ error: 'Error logging in' });
    }
};

// LogOut User
export const logoutUser = async (req, res) => {
    const { email, password } = req.body;

       
    try {
        res.clearCookie('token',{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'dev',
            sameSite:process.env.NODE_ENV === 'dev' ? 'none' : 'strict',
        }  
        );

        return res.json({success:false,message:'Email and password are required'})
       
    } catch (error) {
        res.json({ error: 'Logged out' });
    }
};

// Placeholder function for getting user profile
export const getUserProfile = (req, res) => {
    res.status(200).json({ message: 'User profile retrieved' });
};

// Placeholder function for updating user profile
export const updateUserProfile = (req, res) => {
    res.status(200).json({ message: 'User profile updated' });
};
