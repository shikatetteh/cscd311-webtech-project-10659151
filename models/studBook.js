const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  studentFirstName: {
    type: String,
    required: true
  },

  studentLastName: {
    type: String,
    required: true
  },

  studentId: {
    type: String,
    required: true
  },

  bookingSection: {
    type: String,
    required: true
  },

  roomNumber: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('booking', bookingSchema);
