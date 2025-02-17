import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // verifyOtp: { type: String, default:''},
  // isAccountVerified:{type:Boolean,default:false},
  // resetOtp: { type: String, default:''},
  // resetOtpExpiredAt:{type:Number,default:0},
});

const userModel= mongoose.models.user || mongoose.model('User', userSchema);

export default userModel;
