import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  contactInfo: { type: String },
  savedProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
});

export default mongoose.model('User', userSchema);
