const Student = require('../models/student');
const Booking = require('../models/studBook');
exports.getLoginPage = (req, res) => {
  res.render('home');
};

exports.postLoginPage = (req, res) => {
  const studentId = req.body.studentid;
  const studentPin = req.body.studentPin;
  Student.findOne(studentId)
    .then(student => {
      console.log(student);
      res.redirect('/booking');
    })
    .catch(error => {
      console.log(error);
    });
  // const student = new Student({
  //   studentId: studentId,
  //   studentPin: studentPin
  // });
  // student
  //   .save()
  // Student.findOne()
};
exports.getBookingPage = (req, res) => {
  res.render('booking');
};

exports.postBookingPage = (req, res) => {
  const studentFirstName = req.body.studentFirstName;
  const studentLastName = req.body.studentLastName;
  const studentId = req.body.studentId;
  const hostelBookingSection = req.body.hostelBookingSection;
  const roomNumber = req.body.roomNumber;

  const booking = new Booking({
    studentFirstName: studentFirstName,
    studentLastName: studentLastName,
    studentId: studentId,
    bookingSection: hostelBookingSection,
    roomNumber: roomNumber
  });
  booking
    .save()
    .then(result => {
      console.log('Booking Successful');
      res.redirect('/portal');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getPortalPage = (req, res) => {
  res.render('portal');
};
