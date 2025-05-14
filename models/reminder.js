const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  
}, { timestamps: true });

module.exports = mongoose.model('Reminder', reminderSchema);
