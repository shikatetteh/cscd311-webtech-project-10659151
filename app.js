const express = require('express');
const path = require('path');

const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://localhost:27017/student-online-registration',
    { useNewUrlParser: true },
    () => console.log('connected to DBI')
  )
  .catch(error => console.log(error));

const Student = require('./models/student');

// Student.create({ studentId: '111', studentPin: '1234' })
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homeRoute = require('./route/home');
app.use(homeRoute);

app.use(express.static(path.join(__dirname, 'public')));
const PORT = 5000;

//set static folder
app.listen(PORT, () => console.log(`Server starts on port${PORT}`));
