const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },

  studentPin: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('student', studentSchema);
