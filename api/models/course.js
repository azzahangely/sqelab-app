const mongoose = require('mongoose');

// Schema for Course collection
const CourseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  services: [
    {
      serviceName: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        default: null,
      },
    },
  ],
}, { timestamps: true });


