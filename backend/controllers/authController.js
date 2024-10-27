import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { json } from 'body-parser';

//register User

export const registerUser= async (req, res) => {
    try{
        const {name,email,password}=req.body;
        const exstingUser=await User.findOne({email});
        if(exstingUser) return res.status(400).json({message:"User already exists"});

        const hashedPassword=await bcrypt.hash(password,10);
        const newUser =new User ({name,email,passwordHash:hashedPassword});
        await newUser.save();

        res.status(201),json({message:'User register successfully'});
        
    }
    catch(error){
        res.status(500).json({message:'Error in registering user'});
    }
};


// Login User
export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });
  
      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token, userId: user._id });
    } catch (error) {
      res.status(500).json({ error: 'Error logging in' });
    }
  };