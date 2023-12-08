const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['UMKM', 'STUDENT'],
    required: true,
  },
  // Fields specific to UMKM
  annualTurnover: {
    type: Number,
    default: null,
  },
  businessLifespan: {
    type: Number,
    default: null,
  },
  businessIndustry: {
    type: String,
    default: null,
  },
  // Fields specific to STUDENT
  major: {
    type: String,
    default: null,
  },
  semester: {
    type: String,
    default: null,
  },
  skillLevel: {
    type: String,
    enum: ['Amateur', 'Junior', 'Pro'],
    default: null,
  },
  // Other user profile fields
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
