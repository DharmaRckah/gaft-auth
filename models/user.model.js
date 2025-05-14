import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  provider: {
    type: String,
    enum: ['google', 'facebook', 'apple', 'telegram', 'local'],
    required: true,
  },
  providerId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  avatar: {
    type: String,
  },
 
  password: {
    type: String,
  },
}, { timestamps: true });

userSchema.index({ provider: 1, providerId: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

export default User;
