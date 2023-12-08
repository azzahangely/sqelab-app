const mongoose = require('mongoose');

const UMKMSchema = new mongoose.Schema({
  // Fields specific to UMKM collection
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
  // Other fields related to UMKM
}, { timestamps: true });

const StudentSchema = new mongoose.Schema({
  // Fields specific to Student collection
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
  // Other fields related to Student
}, { timestamps: true });

const UMKM = mongoose.model('UMKM', UMKMSchema);
const Student = mongoose.model('STUDENT', StudentSchema);

module.exports = { UMKM, Student };
