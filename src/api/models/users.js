const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

const User = mongoose.model('users', UserSchema, 'users');
module.exports = User;
